import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { ResponseService } from "src/common/response.service";
import { multerConfig } from "src/config/multer.config";
import { MulterModule } from "@nestjs/platform-express";
import { RolePermissionController } from "./rolePermission.controller";
import { RolePermissionService } from "./rolePermission.service";
import { Permission, Role, UserRolePermission } from "src/entities";
dotenv.config();

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission, UserRolePermission]), MulterModule.register(multerConfig)],
  controllers: [RolePermissionController],
  providers: [RolePermissionService, JwtService, ResponseService],
  exports: [TypeOrmModule],
})
export class RolePermissionModule { }
