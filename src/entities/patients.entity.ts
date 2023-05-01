import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { hashSync } from "bcrypt";

@Entity("patients")
class Patient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ default: null })
  updated_at: Date;

  @Column({ length: 72 })
  name: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 72, unique: true })
  email: string;

  @Column({ length: 3 })
  age: number;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 72 })
  mother: string;

  @Column({ length: 72, default: null })
  father: string;

  @Column({ length: 3 })
  blood_type: string;

  @Column({ length: 128 })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
