import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity, OneToMany } from "typeorm";
import bcryptHelper from "../utils/bcrypt-helper";
import { Person } from "../persons/person.entity";


@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, unique: true })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ name: "is_active", default: true })
    isActive: boolean;

    @Column({ name: "created_at", default: Date.now() })
    createdAt: Date;

    @Column({ name: "updated_at", default: Date.now() })
    updatedAt: Date;

    @OneToMany(() => Person, person => person.user)
    persons: Person[]

    @BeforeInsert()
    async updatePassword() {
        this.password = await bcryptHelper.hash(this.password);
    }

}