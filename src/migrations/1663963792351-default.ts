import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663963792351 implements MigrationInterface {
    name = 'default1663963792351'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "update_at"`);
    }

}
