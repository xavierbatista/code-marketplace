import { Pool } from 'pg';
import 'dotenv/config';

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
};

export const pool = new Pool(devConfig);
