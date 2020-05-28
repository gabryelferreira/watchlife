import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePersonHistoryDTO {

    @IsNotEmpty()
    title: string;

    description: string;

    @IsNotEmpty()
    @IsNumber()
    stars: number;

}