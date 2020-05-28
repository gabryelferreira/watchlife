import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsTable1589752198722 implements MigrationInterface {

    table = new Table({
        name: "person",
        columns: [
            {
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "user_id",
                type: "integer",
                isNullable: false
            },
            {
                name: "name",
                type: "varchar",
                length: "50",
                isNullable: false
            },
            {
                name: "description",
                type: "varchar",
                length: "50",
                isNullable: true,
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP"
            },
            {
                name: "updated_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP"
            }
        ],
        foreignKeys: [
            {
                columnNames: ["user_id"],
                referencedTableName: "user",
                referencedColumnNames: ["id"],
                name: "fk_user_id"
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
    }

}
