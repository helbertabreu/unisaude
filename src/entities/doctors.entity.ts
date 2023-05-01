import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  UpdateDateColumn,
} from "typeorm";
import { hashSync } from "bcrypt";

@Entity("doctors")
class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  entry_date: Date;

  @UpdateDateColumn({ default: null })
  updated_at: Date;

  @Column({ length: 72 })
  name: string;

  @Column({ length: 11, unique: true })
  crm: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 128 })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export default Doctor;
