import { TableColumn, type MigrationInterface, type QueryRunner, TableForeignKey } from 'typeorm'

export class AddRuleIdInLogsTable1712020742574 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('logs',
      new TableColumn({
        name: 'ruleId',
        type: 'varchar',
        isNullable: true
      })
    )
    await queryRunner.createForeignKey('logs', new TableForeignKey({
      columnNames: ['ruleId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'rules',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('logs', 'ruleId')
    await queryRunner.dropColumn('logs', 'ruleId')
  }
}
