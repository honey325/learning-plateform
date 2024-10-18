import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1719219110357 implements MigrationInterface {
    name = 'SchemaUpdate1719219110357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`about\` text NOT NULL, UNIQUE INDEX \`IDX_23c05c292c439d77b0de816b50\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courseContent\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`filename\` varchar(225) NOT NULL, \`originalName\` varchar(225) NOT NULL, \`fileSize\` int NOT NULL, \`courseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(225) NOT NULL, \`duration\` varchar(225) NOT NULL, \`courseDetail\` text NOT NULL, \`subscribePrice\` int NOT NULL, \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`roleType\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE current_timestamp(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`contact\` bigint NOT NULL, \`dob\` datetime NOT NULL, \`password\` varchar(255) NOT NULL, \`salt\` varchar(255) NOT NULL, \`roleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stremeSubcribe\` (\`userId\` int NOT NULL, \`courseId\` int NOT NULL, \`isStreamer\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`userId\`, \`courseId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`interest\` (\`userId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_565b1666092f9c0f988183c78b\` (\`userId\`), INDEX \`IDX_392f27b93da27ae6a0417a9c77\` (\`categoryId\`), PRIMARY KEY (\`userId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` DROP COLUMN \`isStreamer\``);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` ADD \`isStreamer\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`CREATE INDEX \`IDX_6fbd4d5edb6d1df44ded5bdb0a\` ON \`stremeSubcribe\` (\`userId\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_eb7f781ee204183da65958691b\` ON \`stremeSubcribe\` (\`courseId\`)`);
        await queryRunner.query(`ALTER TABLE \`courseContent\` ADD CONSTRAINT \`FK_c673336e8c5c77dd3e7f35eb924\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`course\` ADD CONSTRAINT \`FK_c6c48d73b3b32e47e9cc1cfc4c4\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c28e52f758e7bbc53828db92194\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` ADD CONSTRAINT \`FK_6fbd4d5edb6d1df44ded5bdb0a2\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` ADD CONSTRAINT \`FK_eb7f781ee204183da65958691b6\` FOREIGN KEY (\`courseId\`) REFERENCES \`course\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`interest\` ADD CONSTRAINT \`FK_565b1666092f9c0f988183c78bd\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`interest\` ADD CONSTRAINT \`FK_392f27b93da27ae6a0417a9c77e\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`interest\` DROP FOREIGN KEY \`FK_392f27b93da27ae6a0417a9c77e\``);
        await queryRunner.query(`ALTER TABLE \`interest\` DROP FOREIGN KEY \`FK_565b1666092f9c0f988183c78bd\``);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` DROP FOREIGN KEY \`FK_eb7f781ee204183da65958691b6\``);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` DROP FOREIGN KEY \`FK_6fbd4d5edb6d1df44ded5bdb0a2\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c28e52f758e7bbc53828db92194\``);
        await queryRunner.query(`ALTER TABLE \`course\` DROP FOREIGN KEY \`FK_c6c48d73b3b32e47e9cc1cfc4c4\``);
        await queryRunner.query(`ALTER TABLE \`courseContent\` DROP FOREIGN KEY \`FK_c673336e8c5c77dd3e7f35eb924\``);
        await queryRunner.query(`DROP INDEX \`IDX_eb7f781ee204183da65958691b\` ON \`stremeSubcribe\``);
        await queryRunner.query(`DROP INDEX \`IDX_6fbd4d5edb6d1df44ded5bdb0a\` ON \`stremeSubcribe\``);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` DROP COLUMN \`isStreamer\``);
        await queryRunner.query(`ALTER TABLE \`stremeSubcribe\` ADD \`isStreamer\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`DROP INDEX \`IDX_392f27b93da27ae6a0417a9c77\` ON \`interest\``);
        await queryRunner.query(`DROP INDEX \`IDX_565b1666092f9c0f988183c78b\` ON \`interest\``);
        await queryRunner.query(`DROP TABLE \`interest\``);
        await queryRunner.query(`DROP TABLE \`stremeSubcribe\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`course\``);
        await queryRunner.query(`DROP TABLE \`courseContent\``);
        await queryRunner.query(`DROP INDEX \`IDX_23c05c292c439d77b0de816b50\` ON \`category\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
