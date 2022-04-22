import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
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
