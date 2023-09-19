"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCommonDecorators = exports.ApiCommonResponses = exports.ApiAuthHeaders = exports.ApiOperationWithSwaggerSummary = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_guard_1 = require("../guard/user.guard");
const common_2 = require("@nestjs/common");
const validation_pipe_1 = require("./validation.pipe");
function ApiOperationWithSwaggerSummary(summary) {
    return (0, swagger_1.ApiOperation)({ summary });
}
exports.ApiOperationWithSwaggerSummary = ApiOperationWithSwaggerSummary;
function ApiAuthHeaders() {
    return (0, swagger_1.ApiHeader)({
        name: "authorization",
        description: "Enter access-token",
        required: false,
    });
}
exports.ApiAuthHeaders = ApiAuthHeaders;
function ApiCommonResponses() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }), (0, swagger_1.ApiResponse)({ status: 401, description: "Invalid Login credentials." }), (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }), (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }), (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Forbidden, The user does not have access.",
    }));
}
exports.ApiCommonResponses = ApiCommonResponses;
function ApiCommonDecorators() {
    return (0, common_1.applyDecorators)((0, common_2.UseGuards)(user_guard_1.AuthGuard), (0, common_2.UsePipes)(validation_pipe_1.ValidationPipe), (0, swagger_1.ApiSecurity)("authorization"), ApiCommonResponses());
}
exports.ApiCommonDecorators = ApiCommonDecorators;
//# sourceMappingURL=swagger.decorator.js.map