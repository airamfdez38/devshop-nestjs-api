//DTO's let us create a definition for the shape of a data that is coming into the body of an application request

import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {//All properties are read-only to maintain immutability
    
    uuid?: string;
    @IsString()
    readonly date: string;
    @IsNumber()
    readonly amount: number;
    @IsNumber()
    readonly total: number;
  
}
