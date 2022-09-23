"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1663923039442 = void 0;
class default1663923039442 {
    constructor() {
        this.name = 'default1663923039442';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "update_at"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }
}
exports.default1663923039442 = default1663923039442;
//# sourceMappingURL=1663923039442-default.js.map