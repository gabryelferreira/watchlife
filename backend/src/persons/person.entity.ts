import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { PersonHistory } from "./person-history.entity";
import { User } from "../users/user.entity";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user: User;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ name: "image_url" })
    imageUrl: string;

    @OneToMany(() => PersonHistory, post => post.person)
    histories: PersonHistory[];

    @Column({ name: "created_at", default: Date.now() })
    createdAt: Date;

    @Column({ name: "updated_at", default: Date.now() })
    updatedAt: Date;

}