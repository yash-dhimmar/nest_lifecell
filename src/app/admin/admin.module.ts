import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { ResponseService } from "src/common/response.service";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { User, UserToken } from "src/entities";
import { CommonService } from "src/common/common.service";
import { EmailService } from "src/common/email.service";
dotenv.config();

@Module({
    imports: [TypeOrmModule.forFeature([User, UserToken])],
    controllers: [AdminController],
    providers: [AdminService, JwtService, ResponseService, CommonService, EmailService],
    exports: [TypeOrmModule],
})
export class AdminModule { }
