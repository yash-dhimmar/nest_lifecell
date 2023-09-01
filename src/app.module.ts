import {
  Logger,
  MiddlewareConsumer,
  Module,
  ValidationPipe,
} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthenticationModule } from "./app/user/user.module";
import { ResponseService } from "./common/response.service";
import { databaseConfig } from "./config/database.config";
import { multerConfig } from "./config/multer.config";
import { MulterModule } from "@nestjs/platform-express";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { APP_PIPE } from "@nestjs/core";

@Module({
  controllers: [],
  providers: [
    ResponseService,
    Logger,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [
    /* TypeOrmModule.forRoot(databaseConfig), */
    MulterModule.register(multerConfig),
    AuthenticationModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
