//DTO's let us create a definition for the shape of a data that is coming into the body of an application request

import { IsString } from "class-validator";


export class CreateUserDto {//All properties are read-only to maintain immutability
 
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
    readonly password: string;
    @IsString()
    readonly phone: string;
    @IsString()
    readonly image: string;
}
