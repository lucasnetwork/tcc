import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { LogEntity } from './log.entity'

@Entity('rules')
export class RuleEntitie {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    rule: string

  @OneToMany(() => LogEntity, (log: LogEntity) => log.rule)
  @JoinColumn()
    Logs: LogEntity[]
}
