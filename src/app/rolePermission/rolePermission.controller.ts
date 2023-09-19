import { Body, Controller, Delete, Get, Patch, Post, Req, Res,Response } from "@nestjs/common";
import { RolePermissionService } from "./rolePermission.service";
import { ResponseService } from "src/common/response.service";
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { ApiAuthHeaders, ApiCommonDecorators, ApiCommonResponses, ApiOperationWithSwaggerSummary } from "src/common/swagger.decorator";
import { CreateDTO, UpdateDTO } from "./dto";

@Controller("/rolePermission")
@ApiTags("Role-Permission")
export class RolePermissionController {
  constructor(
    private readonly rolePermissionService: RolePermissionService,
    private readonly responseService: ResponseService
  ) { }

  @ApiOperationWithSwaggerSummary("Create Role or Permission. For Role Type =1 and for Perission type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        type: {
          type: "number",
          enum: [1, 2],
          description: "1 for Role, 2 for Permission",
        },
        name: { type: "string" }
      },
    },
  })
  @Post("create")
  async create(
    @Req() req,
    @Res() res: Response,
    @Body() body: CreateDTO
  ) {
    try {
      const data = await this.rolePermissionService.create(body);
      return this.responseService.success(res, "CREATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Patch("update/:id")
  @ApiOperationWithSwaggerSummary("Update Role or Permission. For role Type =1 and for permission type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        type: {
          type: "number",
          enum: [1, 2],
          description: "1 for Role, 2 for Permission",
        },
        name: { type: "string" },
        id: { type: "number" }
      },
    },
  })
  async update(
    @Req() req,
    @Res() res: Response,
    @Body() body: UpdateDTO
  ) {
    try {
      const data = await this.rolePermissionService.update(body);
      return this.responseService.success(res, "UPDATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("list")
  @ApiOperationWithSwaggerSummary("List Role or Permission. For Role Type =1 and for Permission type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for Role, 2 for Permission",
    type: "number",
    required: false,
  })
  async list(@Req() req, @Res() res: Response) {
    try {
      const data = await this.rolePermissionService.list(req.query.type);
      return this.responseService.success(res, "LIST", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("/getById")
  @ApiOperationWithSwaggerSummary("Get detail by id for Role or Permission. For Role Type =1 and for Permission type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for Role, 2 for Permission",
    type: "number",
    required: false,
  })
  @ApiQuery({
    name: "id",
    description: "Role or Permission Id",
    type: "number",
    required: false,
  })
  async getById(
    @Req() req,
    @Res() res: Response,
  ) {
    try {
      const data = await this.rolePermissionService.getById(req.query);
      return this.responseService.success(res, "GET_BY_ID", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Delete("/delete")
  @ApiOperationWithSwaggerSummary("Delete Role or Permission. For Role Type =1 and for Permission type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for Role, 2 for Permission",
    type: "number",
    required: false,
  })
  @ApiQuery({
    name: "id",
    description: "Role or Permission Id",
    type: "number",
    required: false,
  })
  async delete(
    @Req() req,
    @Res() res: Response
  ) {
    try {
      const data = await this.rolePermissionService.delete(req.query);
      return this.responseService.success(res, "DELETE", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Post("/addPermission")
  @ApiOperationWithSwaggerSummary("Add persmission to Role by ids")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        role_id: { type: "number" },
        permission_ids: {
          type: "array",
          items: { type: "number" }
        }
      },
    },
  })
  async addPermission(
    @Req() req,
    @Res() res: Response,
    @Body() body
  ) {
    try {
      const data = await this.rolePermissionService.addPermission(body);
      return this.responseService.success(res, "CREATE", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/listPermissions")
  @ApiOperationWithSwaggerSummary("List of permissions which is assoiciated with Role")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "role_id",
    description: "Role ID",
    type: "number",
    required: true,
  })
  async listPermission(
    @Req() req,
    @Res() res: Response,
  ) {
    try {
      const data = await this.rolePermissionService.listRolePermission(req.query);
      return this.responseService.success(res, "LIST", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/listAllRolePermission")
  @ApiOperationWithSwaggerSummary("List all role with its permissions")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  async listAllPermission(
    @Req() req,
    @Res() res: Response,
  ) {
    try {
      const data = await this.rolePermissionService.listAllRolePermission();
      return this.responseService.success(res, "LIST", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }
}