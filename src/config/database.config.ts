import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
export const databaseConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(__dirname, "../entities/**/*.entity{.ts,.js}")],
  synchronize: true,
  logging: true,
  autoLoadEntities: false,
};
