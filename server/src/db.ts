import { Pool } from "pg";
require("dotenv").config();
// import "dotenv/config"; //uncomment this if the above does not work

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
};

export const pool = new Pool(devConfig);
