import { Controller, Get, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseService } from "src/common/response.service";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { ApiAuthHeaders, ApiCommonResponses, ApiOperationWithSwaggerSummary } from "src/common/swagger.decorator";

@Controller("/users")
@ApiTags("users")
export class UserController {
  constructor(
    private readonly appService: UserService,
    private readonly responseService: ResponseService
  ) { }

  @Get()
  @ApiCommonResponses()
  @ApiOperationWithSwaggerSummary("Get user detail by id")
  @ApiAuthHeaders()
  @ApiQuery({ name: "name", description: "Name", type: "string" })
  async user(@Req() req, @Res() res: Response) {
    try {
      const data = await this.appService.user(req.query.name);
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