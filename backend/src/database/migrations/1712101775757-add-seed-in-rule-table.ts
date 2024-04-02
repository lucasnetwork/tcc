import { type MigrationInterface, type QueryRunner } from 'typeorm'
import { RuleEntitie } from '../entities/rule.entity'

export class AddSeedInRuleTable1712101775757 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    const ruleRepo = queryRunner.manager.getRepository(RuleEntitie)
    await ruleRepo.save([{
      name: 'app_sqlinjection_errors'
    },
    {
      name: 'nodejs_rce_exploitation_attempt'
    },
    {
      name: 'web_sql_injection_in_access_logs'
    },
    {
      name: 'web_xss_in_access_logs'
    }
    ])
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
