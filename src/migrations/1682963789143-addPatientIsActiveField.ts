import { MigrationInterface, QueryRunner } from "typeorm";

export class addPatientIsActiveField1682963789143 implements MigrationInterface {
    name = 'addPatientIsActiveField1682963789143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "isActive"`);
    }

}
