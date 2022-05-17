//DTO's let us create a definition for the shape of a data that is coming into the body of an application request

import { IsString } from "class-validator";

export class CreateSupplierDto {//All properties are read-only to maintain immutability
    @IsString()
    uuid?: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly cif: string;
    @IsString()
    readonly address: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly phone: string;
}
