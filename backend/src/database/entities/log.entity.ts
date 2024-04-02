import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne
} from 'typeorm'
import { RuleEntitie } from './rule.entity'

@Entity('logs')
export class LogEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    program: string

  @Column()
    priority: string

  @Column()
    message: string

  @Column()
    isodate: string

  @Column()
    host: string

  @Column()
    facility: string

  @OneToOne(() => RuleEntitie, (rule: RuleEntitie) => rule.Logs)
  @JoinColumn()
    rule: RuleEntitie

  @Column()
    date: string

  @CreateDateColumn()
    created_at: Date
}
