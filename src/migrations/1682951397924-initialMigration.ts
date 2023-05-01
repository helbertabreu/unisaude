import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1682951397924 implements MigrationInterface {
    name = 'initialMigration1682951397924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zip_code" character varying(8) NOT NULL, "street" character varying(72) NOT NULL, "number" integer NOT NULL, "complement" character varying(72) NOT NULL, "district" character varying(72) NOT NULL, "city" character varying(72) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "solicitation_date" TIMESTAMP NOT NULL DEFAULT now(), "appointment_date" TIMESTAMP, "update_solicitation_date" TIMESTAMP DEFAULT now(), "appointment_date_type" character varying(10) NOT NULL, "specialization" character varying(72) NOT NULL, CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "entry_date" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(72) NOT NULL, "crm" character varying(11) NOT NULL, "email" character varying(72) NOT NULL, "password" character varying(128) NOT NULL, CONSTRAINT "UQ_d7e8212b37dd4e61e996d7289cd" UNIQUE ("crm"), CONSTRAINT "UQ_62069f52ebba471c91de5d59d61" UNIQUE ("email"), CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specializations_doctor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(72) NOT NULL, CONSTRAINT "UQ_d9ba51ce50086503b383d99d84e" UNIQUE ("name"), CONSTRAINT "PK_95ab6cdeeb69925ae4aa348b86c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tutor_patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "name" character varying(72) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(12) NOT NULL, CONSTRAINT "PK_a8c9270d9a0eba4fdeb1b193b73" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tutor_patients"`);
        await queryRunner.query(`DROP TABLE "specializations_doctor"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
