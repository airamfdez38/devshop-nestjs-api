//DTO's let us create a definition for the shape of a data that is coming into the body of an application request

import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {//All properties are read-only to maintain immutability
    @IsString()
    readonly name: string;
    @IsString()
    readonly brand: string;
    @IsNumber()
    readonly stock: number;
    @IsNumber()
    readonly price: number;
    @IsString()
    readonly category: string;
}
