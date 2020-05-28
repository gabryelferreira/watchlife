import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePersonsHistories1589752705764 implements MigrationInterface {

    table = new Table({
        name: "person_history",
        columns: [
            {
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "person_id",
                type: "integer",
                isNullable: false,
            },
            {
                name: "title",
                type: "varchar",
                length: "30",
                isNullable: false,
            },
            {
                name: "description",
                type: "varchar",
                length: "500",
                isNullable: true,
            },
            {
                name: "stars",
                type: "int",
                isNullable: false,
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
                columnNames: ["person_id"],
                referencedTableName: "person",
                referencedColumnNames: ["id"],
                name: "fk_person_id"
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
        
    }

}
