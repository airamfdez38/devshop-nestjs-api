import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
    uuid?: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly surname: string;
    @IsString()
    readonly dni: string;
    @IsString()
    readonly email: string;
    
    @IsString()
    readonly phone: string;
    @IsString()
    readonly image: string;
}
