import { type MigrationInterface, type QueryRunner } from 'typeorm'
import { RuleEntitie } from '../entities/rule.entity'

export class AddSeedInRuleTable1712101775757 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    const ruleRepo = queryRunner.manager.getRepository(RuleEntitie)
    await ruleRepo.save([{
      rule: 'app_sqlinjection_errors'
    },
    {
      rule: 'nodejs_rce_exploitation_attempt'
    },
    {
      rule: 'web_sql_injection_in_access_logs'
    },
    {
      rule: 'web_xss_in_access_logs'
    }
    ])
  }

  public async down (_queryRunner: QueryRunner): Promise<void> {
  }
}
