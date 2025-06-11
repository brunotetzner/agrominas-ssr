import "dotenv/config";
import { DataSource } from "typeorm";
import { UserEntity } from "../entitites/user.entity";

console.log("Database Host:", process.env.AGROMINAS_DATABASE_HOST);
console.log("Database User:", process.env.AGROMINAS_DATABASE_USER);
console.log("Database Name:", process.env.AGROMINAS_DATABASE_NAME);

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.AGROMINAS_DATABASE_HOST,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  username: process.env.AGROMINAS_DATABASE_USER,
  password: process.env.AGROMINAS_DATABASE_PASSWORD,
  database: process.env.AGROMINAS_DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: [],
});
