import { MigrationInterface, QueryRunner } from "typeorm";

export class patientGenreColumn1682952991060 implements MigrationInterface {
    name = 'patientGenreColumn1682952991060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(72) NOT NULL, "cpf" character varying(11) NOT NULL, "email" character varying(72) NOT NULL, "age" integer NOT NULL, "phone" character varying(12) NOT NULL, "genre" character varying(72) NOT NULL, "mother" character varying(72) NOT NULL, "father" character varying(72), "blood_type" character varying(3), "password" character varying(128) NOT NULL, CONSTRAINT "UQ_5947301223f5a908fd5e372b0fb" UNIQUE ("cpf"), CONSTRAINT "UQ_64e2031265399f5690b0beba6a5" UNIQUE ("email"), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "patients"`);
    }

}
