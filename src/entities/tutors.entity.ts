import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("tutor_patients")
class Tutor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ default: null })
  updated_at: Date;

  @Column({ length: 72 })
  name: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 12 })
  phone: string;
}

export default Tutor;
