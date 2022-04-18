import {MigrationInterface, QueryRunner} from "typeorm";

export class users1650303744737 implements MigrationInterface {
    name = 'users1650303744737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(32) NOT NULL, \`email\` varchar(32) NOT NULL, \`password_hash\` varchar(255) NOT NULL, \`user_verified\` tinyint NOT NULL, \`account_status\` tinyint NOT NULL DEFAULT 1, \`registration_datetime\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`last_logged_in\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
