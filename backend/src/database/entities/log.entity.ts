import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("logs")
export class LogEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  program: string;

  @Column()
  priority: string;

  @Column()
  message: string;

  @Column()
  isodate: string;

  @Column()
  host: string;

  @Column()
  facility: string;

  @Column()
  date: string;

  @CreateDateColumn()
  created_at: Date;
}
