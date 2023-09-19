import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  Response,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseService } from "src/common/response.service";
import { ApiBody, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { LoginUserDTO } from "./dto/login-user.dto";

@Controller("/users")
@ApiTags("Users")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly responseService: ResponseService
  ) {}

  @Post("createUser")
  @ApiBody({ type: CreateUserDTO })
  @ApiOperation({ summary: "create User detail" })
  async createUser(
    @Req() req,
    @Res() res: Response,
    @Body() body: CreateUserDTO
  ) {
    try {
      const data = await this.userService.createUser(body);
      return this.responseService.success(res, "USER_CREATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Patch("updateUserDetail/:id")
  @ApiBody({ type: UpdateUserDTO })
  @ApiParam({ name: "id", description: "user_id", type: "number" })
  @ApiOperation({ summary: "Update User detail" })
  async updateUserDetail(
    @Req() req,
    @Res() res: Response,
    @Body() body: UpdateUserDTO,
    @Param("id") id: number
  ) {
    try {
      const data = await this.userService.updateUserDetail(id, body);
      return this.responseService.success(res, "USER_UPDATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("userList")
  @ApiOperation({ summary: "User list of data" })
  async userList(@Req() req, @Res() res: Response) {
    try {
      const data = await this.userService.userList();
      return this.responseService.success(res, "USER_LIST", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("/userGetById/:id")
  @ApiParam({ name: "id", description: "user_id", type: "number" })
  @ApiOperation({ summary: "Get User detail by userId" })
  async UserGetById(@Req() req, @Res() res: Response, @Param("id") id: number) {
    try {
      const data = await this.userService.UserGetById(id);
      return this.responseService.success(res, "USER_GET_BY_ID", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Delete("/deleteUser/:id")
  @ApiParam({ name: "id", description: "user_id", type: "number" })
  @ApiOperation({ summary: "Delete User detail" })
  async deleteUser(@Req() req, @Res() res: Response, @Param("id") id: number) {
    try {
      const data = await this.userService.deleteUser(id);
      return this.responseService.success(res, "USER_DELETE", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Post("/login")
  @ApiOperation({ summary: "user login api" })
  async login(@Req() req, @Res() res: Response, @Body() body: LoginUserDTO) {
    try {
      const data = await this.userService.login(body);
      return this.responseService.success(res, "USER_LOGIN", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }
}
