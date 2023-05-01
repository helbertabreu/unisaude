import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("appointments")
class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  solicitation_date: Date;

  @Column({ default: null })
  appointment_date: Date;

  @UpdateDateColumn({ default: null })
  update_solicitation_date: Date;

  @Column({ length: 10 })
  appointment_date_type: string;

  @Column({ length: 72 })
  specialization: string;
}

export default Appointment;
