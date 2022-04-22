import { IsString } from "class-validator";

export class CreateSupplierDto {
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
