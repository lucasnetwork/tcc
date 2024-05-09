import 'reflect-metadata'
import { DataSource, type DataSourceOptions } from 'typeorm'
import { config } from 'dotenv'
config()

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['./dist/database/migrations/*.js'],
  entities: ['./dist/database/entities/*.js']
}

export const AppSource = new DataSource(options)

export const InitializeConnection = async () => {
  const host = process.env.POSTGRES_HOST
  const database = process.env.POSTGRES_DB

  try {
    await AppSource.setOptions({ host, database }).initialize()
    console.log('database online')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
