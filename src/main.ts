import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { json } from "body-parser";
import { ValidationExceptionFilter } from "./common/validation-exception.filter";

import * as express from "express";
import * as compression from "compression";

import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { SwaggerConfig } from "./config/swagger.config";

async function bootstrap() {
  const server = express();
  server.use(compression());
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  );

  app.enableCors({
    allowedHeaders: "*",
    origin: "*",
    credentials: true,
  });
  app.use(json({ limit: "15mb" }));

  app.setGlobalPrefix("v1");

  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup("api", app, document);

  // Enable ValidationPipe globally
  const validationOptions = {
    whitelist: true, // Automatically remove properties that are not decorated with validation decorators
  };
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalFilters(new ValidationExceptionFilter());

  await app.listen(process.env.PORT);
}
bootstrap();
