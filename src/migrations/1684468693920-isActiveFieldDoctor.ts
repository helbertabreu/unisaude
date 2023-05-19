import { MigrationInterface, QueryRunner } from "typeorm";

export class IsActiveFieldDoctor1684468693920 implements MigrationInterface {
    name = 'IsActiveFieldDoctor1684468693920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctors" DROP COLUMN "isActive"`);
    }

}
