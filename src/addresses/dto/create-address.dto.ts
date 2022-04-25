//DTO's let us create a definition for the shape of a data that is coming into the body of an application request
import { IsString } from "class-validator";

export class CreateAddressDto {//All properties are read-only to maintain immutability
    @IsString()
    readonly via: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly number: string;
    @IsString()
    readonly zip_code: string;
    @IsString()
    readonly city: string;
    @IsString()
    readonly country: string;
}
