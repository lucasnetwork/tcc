import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

const options: DataSourceOptions  = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/database/entities/*.ts'],
}

export const AppSource = new DataSource(options);

export const InitializeConnection = async () => {
  const host = process.env.POSTGRES_HOST;
  const database =  process.env.POSTGRES_DB;

  try {
    await AppSource.setOptions({ host, database }).initialize();
  } catch (err) {
    process.exit(1);
  }
};
