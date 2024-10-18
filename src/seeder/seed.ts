import { roleSeed } from 'src/role/role.seed';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1718798379471 implements MigrationInterface {
  name = 'seeder';
  constructor(private roleseeder: roleSeed) {}
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.roleseeder.seeder();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.roleseeder.delete();
  }
}
