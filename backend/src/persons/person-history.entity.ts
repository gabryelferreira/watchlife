import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Person } from "../persons/person.entity";

@Entity({ name: "person_history" })
export class PersonHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Person, { nullable: false })
    @JoinColumn({ name: "person_id", referencedColumnName: "id" })
    person: Person;

    @Column({ nullable: false })
    title: string;

    @Column()
    description: string;

    @Column({ nullable: false })
    stars: number;

    @Column({ name: "created_at", default: Date.now() })
    createdAt: Date;

    @Column({ name: "updated_at", default: Date.now() })
    updatedAt: Date;

}