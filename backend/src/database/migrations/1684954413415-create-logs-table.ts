import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLogsTable1684954413415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "logs",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: "program",
            type: "varchar",
          },
          {
            name: "priority",
            type: "varchar",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "isodate",
            type: "varchar",
          },
          {
            name: "host",
            type: "varchar",
          },
          {
            name: "facility",
            type: "varchar",
          },
          {
            name: "date",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("logs")
  }
}
