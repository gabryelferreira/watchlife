import { Person } from "src/persons/person.entity";

export interface IPersonWithStar extends Person {
    stars?: number;
}