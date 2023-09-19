import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import * as md5 from "md5";
import * as crypto from "crypto";
import { Zone } from "src/entities/zone.entity";
import { Center } from "src/entities/center.entity";
import { Zip } from "src/entities/zip.entity";
import { Role } from "src/entities/role.entity";
import { LoginUserDTO } from "./dto/login-user.dto";
import { UserToken } from "src/entities";

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Zone)
    private readonly zoneRepository: Repository<Zone>,
    @InjectRepository(Center)
    private readonly centerRepository: Repository<Center>,
    @InjectRepository(Zip)
    private readonly zipRepository: Repository<Zip>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(UserToken)
    private readonly tokenRepository: Repository<UserToken>
  ) {}

  /*
  | --------------------------------- |
  | Store data in User table          |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async createUser(body: CreateUserDTO): Promise<any> {
    try {
      const data = await this.userRepository.find({
        where: { email: body.email },
      });
      if (data.length) {
        throw new NotFoundException("USER_EMAIL_EXIT");
      }
      const checkZoneId = await this.zoneRepository.find({
        where: { id: body.zone_id },
      });
      if (!checkZoneId.length) {
        throw new NotFoundException("ZONE_ID_NOT_FOUND");
      }
      const checkCenterId = await this.centerRepository.find({
        where: { id: body.center_id },
      });
      if (!checkCenterId.length) {
        throw new NotFoundException("CENTER_ID_NOT_FOUND");
      }
      const checkZipId = await this.zipRepository.find({
        where: { id: body.zip_id },
      });
      if (!checkZipId.length) {
        throw new NotFoundException("ZIP_ID_NOT_FOUND");
      }
      const checkRoleId = await this.roleRepository.find({
        where: { id: body.role_id },
      });
      if (!checkRoleId.length) {
        throw new NotFoundException("ROLE_ID_NOT_FOUND");
      }
      body.password = md5(body.password);
      const user_create = await this.userRepository.save(body);
      return user_create;
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | Update data in User table         |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async updateUserDetail(user_id: number, body: UpdateUserDTO): Promise<any> {
    try {
      const {
        first_name,
        last_name,
        email,
        city,
        state,
        phone,
        dob,
        qualification,
        zone_id,
        center_id,
        zip_id,
        role_id,
      } = body;
      const checkId = await this.userRepository.find({
        where: { id: user_id },
      });
      if (!checkId.length) {
        throw new NotFoundException("USER_ID_NOT_FOUND");
      }
      // const checkEmail = await this.userRepository.find({
      //   where: { email: body.email },
      // });
      // if (checkEmail.length) {
      //   throw new NotFoundException("USER_EMAIL_EXIT");
      // }
      const checkZoneId = await this.zoneRepository.find({
        where: { id: body.zone_id },
      });
      if (!checkZoneId.length) {
        throw new NotFoundException("ZONE_ID_NOT_FOUND");
      }
      const checkCenterId = await this.centerRepository.find({
        where: { id: body.center_id },
      });
      if (!checkCenterId.length) {
        throw new NotFoundException("CENTER_ID_NOT_FOUND");
      }
      const checkZipId = await this.zipRepository.find({
        where: { id: body.zip_id },
      });
      if (!checkZipId.length) {
        throw new NotFoundException("ZIP_ID_NOT_FOUND");
      }
      const checkRoleId = await this.roleRepository.find({
        where: { id: body.role_id },
      });
      if (!checkRoleId.length) {
        throw new NotFoundException("ROLE_ID_NOT_FOUND");
      }
      await this.userRepository.update(
        { id: user_id },
        {
          first_name,
          last_name,
          email,
          city,
          state,
          phone,
          dob,
          qualification,
          zone_id,
          center_id,
          zip_id,
          role_id,
        }
      );
      return {};
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | List of User table data         |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async userList(): Promise<any> {
    try {
      const userList = await this.userRepository.find({
        //select: { id: true, first_name: true, last_name: true },
      });
      console.log("userList=====>", userList);
      return userList;
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | User data getById in User table   |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async UserGetById(id): Promise<any> {
    try {
      const data = await this.userRepository.find({
        where: { id: id },
      });
      if (!data.length) {
        throw new NotFoundException("USER_ID_NOT_FOUND");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | delete data in User table         |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async deleteUser(id): Promise<any> {
    try {
      const checkId = await this.userRepository.find({ where: { id: id } });
      if (!checkId.length) {
        throw new NotFoundException("USER_ID_NOT_FOUND");
      }
      await this.userRepository.delete({ id });
      return {};
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | User Login api                    |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async login(body: LoginUserDTO): Promise<any> {
    try {
      const checkEmail: any = await this.userRepository.find({
        where: { email: body.email },
      });
      console.log("checkEmail======>", checkEmail);
      if (!checkEmail.length) {
        throw new NotFoundException("INVALID_EMAIL");
      }
      const login_attempt_hashed = crypto
        .createHash("md5")
        .update(body.password)
        .digest("hex");
      if (login_attempt_hashed === checkEmail[0].password) {
        const auth_token = this.jwtService.sign(
          { user_id: checkEmail.id },
          { secret: "secretKey", expiresIn: process.env.JWT_EXPIRE_TIME }
        );

        const refresh_token = await this.jwtService.sign(
          { user_id: checkEmail.id },
          { secret: "secretKey", expiresIn: process.env.REFRESH_EXPIRE_TIME }
        );
        const userDetails = await this.tokenRepository.findOne({
          where: { user: { id: checkEmail.id } },
        });
        console.log("data=========>", userDetails);
        if (userDetails) {
          const data = await this.tokenRepository.update(
            { user: { id: checkEmail.id } },
            {
              auth_token,
              refresh_token,
            }
          );
          console.log("data=========>", checkEmail[0].User[0].id);
        } else {
          // await this.tokenRepository.save({
          //   user: { id: checkEmail.id },
          //   user_id: checkEmail.id,
          //   auth_token,
          //   refresh_token,
          // });
        }
        return { checkEmail, auth_token, refresh_token };
      }
      throw new NotFoundException("INVALID_PASSWORD");
    } catch (error) {
      throw error;
    }
  }
}
