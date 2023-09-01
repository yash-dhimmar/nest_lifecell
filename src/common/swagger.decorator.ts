import { applyDecorators } from "@nestjs/common";
import {
  ApiOperation,
  ApiResponse,
  ApiHeader,
  ApiSecurity,
} from "@nestjs/swagger";
import { AuthGuard } from "src/guard/user.guard";
import { UseGuards, UsePipes } from "@nestjs/common";
import { ValidationPipe } from "./validation.pipe";

export function ApiOperationWithSwaggerSummary(summary: string) {
  return ApiOperation({ summary });
}

export function ApiAuthHeaders() {
  return ApiHeader({
    name: "authorization",
    description: "Enter access-token",
    required: false,
  });
}

export function ApiCommonResponses() {
  return applyDecorators(
    ApiResponse({ status: 200, description: "Api success" }),
    ApiResponse({ status: 401, description: "Invalid Login credentials." }),
    ApiResponse({ status: 404, description: "Not found!" }),
    ApiResponse({ status: 500, description: "Internal server error!" }),
    ApiResponse({
      status: 403,
      description: "Forbidden, The user does not have access.",
    })
  );
}

export function ApiCommonDecorators() {
  return applyDecorators(
    UseGuards(AuthGuard),
    UsePipes(ValidationPipe),
    ApiSecurity("authorization"),
    ApiCommonResponses()
  );
}
