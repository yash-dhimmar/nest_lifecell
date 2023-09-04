import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResponseService } from "src/common/response.service";
import { Source } from "src/entities/source.entity";
import { SourceController } from "./source.controller";
import { SourceService } from "./source.service";
import { Medium } from "src/entities";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forFeature([Source, Medium])],
  controllers: [SourceController],
  providers: [SourceService, JwtService, ResponseService],
})
export class SourceMediumModule { }
