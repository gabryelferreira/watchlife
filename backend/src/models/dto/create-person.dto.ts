import { IsNotEmpty } from "class-validator";

export class CreatePersonDTO {

    personId: number;

    @IsNotEmpty()
    name: string;

    description: string;
}