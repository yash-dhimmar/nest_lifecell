import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { ResponseService } from "src/common/response.service";
import { User } from "src/entities/user.entity";
import { Zone } from "src/entities/zone.entity";
import { Center } from "src/entities/center.entity";
import { Zip } from "src/entities/zip.entity";
import { Role } from "src/entities/role.entity";
import { UserToken } from "src/entities";
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Zone, Center, Zip, Role, UserToken]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtService, ResponseService],
  exports: [TypeOrmModule],
})
export class AuthenticationModule {}
