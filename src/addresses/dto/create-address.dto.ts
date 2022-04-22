import { IsString } from "class-validator";

export class CreateAddressDto {
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
