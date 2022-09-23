"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1663893457966 = void 0;
class default1663893457966 {
    constructor() {
        this.name = 'default1663893457966';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "finished" boolean NOT NULL DEFAULT false, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }
}
exports.default1663893457966 = default1663893457966;
//# sourceMappingURL=1663893457966-default.js.map