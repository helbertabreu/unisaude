import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  zip_code: string;

  @Column({ length: 72 })
  street: string;

  @Column()
  number: number;

  @Column({ length: 72 })
  complement: string;

  @Column({ length: 72 })
  district: string;

  @Column({ length: 72 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export default Address;
