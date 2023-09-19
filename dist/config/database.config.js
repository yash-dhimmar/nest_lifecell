"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const path_1 = require("path");
exports.databaseConfig = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [(0, path_1.join)(__dirname, "../entities/**/*.entity{.ts,.js}")],
    synchronize: true,
    logging: true,
    autoLoadEntities: false,
};
//# sourceMappingURL=database.config.js.map