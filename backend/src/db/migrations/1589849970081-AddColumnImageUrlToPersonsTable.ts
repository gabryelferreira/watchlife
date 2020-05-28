import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnImageUrlToPersonsTable1589849970081 implements MigrationInterface {

    column = new TableColumn({
        name: "image_url",
        type: "varchar",
        length: "255",
        isNullable: true,
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn("person", this.column);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn("person", this.column);
    }

}
