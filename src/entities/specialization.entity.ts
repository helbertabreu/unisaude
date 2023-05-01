import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("specializations_doctor")
class Specialization {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 72, unique: true })
  name: string;
}

export default Specialization;
