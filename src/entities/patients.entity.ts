import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
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

  @Column()
  age: number;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 72 })
  genre: string;

  @Column({ length: 72 })
  mother: string;

  @Column({ length: 72, default: null })
  father: string;

  @Column({ length: 3, default: null })
  blood_type: string;

  @Column({ length: 128 })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export default Patient;
