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
import { ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";
import { ResponseService } from "src/common/response.service";
import { CreateSourceDTO } from "./dto/createSource.dto";
import { UpdateSourceDTO } from "./dto/updateSource.dto";
import { SourceService } from "./source.service";
import { ApiAuthHeaders, ApiCommonDecorators, ApiOperationWithSwaggerSummary } from "src/common/swagger.decorator";

@Controller("source")
@ApiTags("Source_and_Medium")
export class SourceController {
  constructor(
    private readonly responseService: ResponseService,
    private readonly sourceService: SourceService
  ) { }

  @ApiOperationWithSwaggerSummary("Create Source or Medium. For source Type =1 and for Medium type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        type: {
          type: "number",
          enum: [1, 2],
          description: "1 for source, 2 for medium",
        },
        name: { type: "string" }
      },
    },
  })
  @Post("createSource")
  async createSource(
    @Req() req,
    @Res() res: Response,
    @Body() body: CreateSourceDTO
  ) {
    try {
      const data = await this.sourceService.createSource(body);
      return this.responseService.success(res, "CREATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Patch("updateSource/:id")
  @ApiOperationWithSwaggerSummary("Update Source or Medium. For source Type =1 and for Medium type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        type: {
          type: "number",
          enum: [1, 2],
          description: "1 for source, 2 for medium",
        },
        name: { type: "string" },
        id: { type: "number" }
      },
    },
  })
  async updateSource(
    @Req() req,
    @Res() res: Response,
    @Body() body: UpdateSourceDTO
  ) {
    try {
      const data = await this.sourceService.updateSource(body);
      return this.responseService.success(res, "UPDATE", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("sourceList")
  @ApiOperationWithSwaggerSummary("List Source or Medium. For source Type =1 and for Medium type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for source, 2 for medium",
    type: "number",
    required: false,
  })
  async sourceList(@Req() req, @Res() res: Response) {
    try {
      const data = await this.sourceService.sourceList(req.query.type);
      return this.responseService.success(res, "LIST", data);
    } catch (error) {
      return this.responseService.error(req, res, error.message);
    }
  }

  @Get("/SourceGetById")
  @ApiOperationWithSwaggerSummary("Get detail by id for Source or Medium. For source Type =1 and for Medium type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for source, 2 for medium",
    type: "number",
    required: false,
  })
  @ApiQuery({
    name: "id",
    description: "Source or Medium Id",
    type: "number",
    required: false,
  })
  async SourceGetById(
    @Req() req,
    @Res() res: Response,
  ) {
    try {
      const data = await this.sourceService.SourceGetById(req.query);
      return this.responseService.success(res, "GET_BY_ID", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Delete("/deleteSource")
  @ApiOperationWithSwaggerSummary("Delete Source or Medium. For source Type =1 and for Medium type=2")
  @ApiCommonDecorators()
  @ApiAuthHeaders()
  @ApiQuery({
    name: "type",
    enum: [1, 2],
    description: "1 for source, 2 for medium",
    type: "number",
    required: false,
  })
  @ApiQuery({
    name: "id",
    description: "Source or Medium Id",
    type: "number",
    required: false,
  })
  async deleteSource(
    @Req() req,
    @Res() res: Response
  ) {
    try {
      const data = await this.sourceService.deleteSource(req.query);
      return this.responseService.success(res, "DELETE", data);
    } catch (error) {
      console.log("error========>", error);
      this.responseService.error(req, res, error.message);
    }
  }
}
