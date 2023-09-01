import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { ResponseService } from "src/common/response.service";
import { multerConfig } from "src/config/multer.config";
import { MulterModule } from "@nestjs/platform-express";
dotenv.config();

@Module({
  imports: [TypeOrmModule.forFeature([]), MulterModule.register(multerConfig)],
  controllers: [UserController],
  providers: [UserService, JwtService, ResponseService],
  exports: [TypeOrmModule],
})
export class AuthenticationModule { }
