import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDTO, ForgotPasswordDto, VerifyOtpDTO, ResetPasswordDTO } from "./dto";
import * as md5 from "md5";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User, UserToken } from "src/entities";
import { CommonService } from "src/common/common.service";
import { EmailService } from "src/common/email.service";

@Injectable()
export class AdminService {
  constructor(
    private jwtService: JwtService,
    private commonService: CommonService,
    private emailService: EmailService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserToken)
    private tokenRepository: Repository<UserToken>
  ) { }
  async login(body: LoginDTO) {
    try {
      let { email, password } = body;
      password = md5(password);

      const adminDetails = await this.userRepository.findOne({
        where: { email: email, user_type: 1 },
        select: { id: true, email: true, password: true, otp_verify: true }
      });
      if (!adminDetails) throw new UnauthorizedException("INVALID_EMAIL");

      console.log(adminDetails);
      if (adminDetails.password != password)
        throw new UnauthorizedException("INVALID_PASSWORD");

      const auth_token = await this.jwtService.sign(
        { user_id: adminDetails.id, is_admin: 1 },
        { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME }
      );

      const refresh_token = await this.jwtService.sign(
        { user_id: adminDetails.id, is_admin: 1 },
        { secret: "secretKey", expiresIn: process.env.REFRESH_EXPIRE_TIME }
      );

      const userDetails = await this.tokenRepository.findOne({
        where: { user: { id: adminDetails.id } },
      });
      if (userDetails) {
        await this.tokenRepository.update({ user: { id: adminDetails.id } }, {
          auth_token,
          refresh_token
        });
      } else {
        await this.tokenRepository.save({
          user: { id: adminDetails.id },
          user_id: adminDetails.id,
          auth_token,
          refresh_token,
        });
      }

      return { adminDetails, auth_token, refresh_token };
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async refresh_token(headers: any, body: any) {
    try {
      const refresh_token = await this.tokenRepository.findOne({
        where: {
          user: { id: body.user_id },
        }
      });

      console.log(headers.refresh_token)
      console.log(refresh_token.refresh_token)
      if (headers.refresh_token !== refresh_token.refresh_token) {
        throw new UnauthorizedException("REFRESH_MALFORMED");
      }

      const token = await this.jwtService.sign(
        { user_id: body.user_id, is_admin: 1 },
        { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME }
      );

      await this.tokenRepository.update(
        { user: { id: body.user_id } },
        { auth_token: token }
      );

      return { token: token };
    } catch (error) {
      throw error;
    }
  }

  async forgot_password(body: ForgotPasswordDto) {
    try {
      let {
        email
      } = body;

      const adminDetails = await this.userRepository.findOne({
        where: { email: email },
        select: { id: true, email: true, password: true },
      });
      if (!adminDetails) throw new UnauthorizedException("INVALID_EMAIL");

      const otp = await this.commonService.generateOtp(4);

      const userDetail = await this.userRepository.update(adminDetails.id, {
        otp: otp,
        otp_verify: false,
      });
      console.log(userDetail);
      const paylaod = {
        OTP: otp
      }
      if (userDetail)
        await this.emailService.sendMail(email, paylaod);
      let auth_token: string;
      if (adminDetails.user_type = 1) {
        auth_token = await this.jwtService.sign(
          { user_id: adminDetails.id, is_admin: 1 },
          { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME }
        );
      } else {
        auth_token = await this.jwtService.sign(
          { user_id: adminDetails.id, is_admin: 0 },
          { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME }
        );
      }

      return { auth_token, otp };
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async resend_otp(body) {
    try {
      let { user_id } = body;

      const userDetail = await this.userRepository.findOne({
        where: { id: user_id },
        select: { id: true, email: true }
      });

      const otp = await this.commonService.generateOtp(4);
      const paylaod = {
        OTP: otp
      }
      if (userDetail)
        await this.emailService.sendMail(userDetail.email, paylaod);

      await this.userRepository.update(user_id, {
        otp: otp,
        otp_verify: false,
      });
      return { otp };
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async otp_verify(body: VerifyOtpDTO) {
    try {
      let { user_id, otp } = body;

      const userDetail = await this.userRepository.findOne({
        where: { id: user_id, otp: otp },
        select: { id: true, email: true }
      });

      if (!userDetail) {
        throw {
          message: "INCORRECT_OTP",
          code: 401
        }
      }

      await this.userRepository.update(user_id, { otp_verify: true })
      return {};
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async reset_password(body: ResetPasswordDTO) {
    try {
      let { password, user_id } = body;

      password = md5(password);
      const userDetail = await this.userRepository.findOne({
        where: { id: user_id },
        select: { id: true, email: true }
      });
      if (password == userDetail.password)
        throw {
          message: "OLD_NEW_PASSWORD_SAME",
          code: 403
        }

      await this.userRepository.update(user_id, { password: password });
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}
