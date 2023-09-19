import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Response,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { ResponseService } from "src/common/response.service";
import { ApiBody, ApiHeader, ApiTags } from "@nestjs/swagger";
import {
  ApiAuthHeaders,
  ApiCommonDecorators,
  ApiCommonResponses,
  ApiOperationWithSwaggerSummary,
} from "src/common/swagger.decorator";
import { ForgotPasswordDto, LoginDTO, ResetPasswordDTO, VerifyOtpDTO } from "./dto";
import { RefreshGuard } from "src/guard/refresh.guard";

@Controller("/admin")
@ApiTags("Admin")
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly responseService: ResponseService
  ) { }

  @Post("/login")
  @UsePipes(ValidationPipe)
  @ApiOperationWithSwaggerSummary("Admin Login")
  @ApiCommonResponses()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: { type: "string" },
        password: { type: "string" },
      },
    },
  })
  async login(@Req() req, @Res() res: Response, @Body() body: LoginDTO) {
    try {
      const data = await this.adminService.login(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }

  @Post("/refresh_token")
  @UseGuards(RefreshGuard)
  @ApiOperationWithSwaggerSummary("Refresh Token")
  @ApiCommonResponses()
  @ApiHeader({
    name: "refresh_token",
    description: "Enter refresh-token",
    required: true,
  })
  async refresh_token(@Req() req, @Res() res: Response) {
    try {
      const data = await this.adminService.refresh_token(req.headers, req.body);
      this.responseService.success(res, "TOKEN_REFRESHED", data);
    } catch (error) {
      console.log(error)
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }

  @Post("/forgot_password")
  @UsePipes(ValidationPipe)
  @ApiOperationWithSwaggerSummary("Forgot Password")
  @ApiCommonResponses()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        email: { type: "string" },
      },
    },
  })
  async forgot_password(@Req() req, @Res() res: Response, @Body() body: ForgotPasswordDto) {
    try {
      const data = await this.adminService.forgot_password(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }

  @Post("/resend_otp")
  @ApiOperationWithSwaggerSummary("resend otp")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  async resend_otp(@Req() req, @Res() res: Response, @Body() body) {
    try {
      const data = await this.adminService.resend_otp(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }

  @Post("/otp_verify")
  @ApiOperationWithSwaggerSummary("resend otp")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        otp: { type: "number" },
      },
    },
  })
  async otp_verify(@Req() req, @Res() res: Response, @Body() body: VerifyOtpDTO) {
    try {
      const data = await this.adminService.otp_verify(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }

  @Post("/reset_password")
  @ApiOperationWithSwaggerSummary("reset password")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        password: { type: "string" },
      },
    },
  })
  async reset_password(@Req() req, @Res() res: Response, @Body() body: ResetPasswordDTO) {
    try {
      const data = await this.adminService.reset_password(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      if (error.status) {
        this.responseService.error(req, res, error.message, error.status);
      } else {
        this.responseService.error(req, res, error.message);
      }
    }
  }
}