//DTO's let us create a definition for the shape of a data that is coming into the body of an application request
import { IsString, IsNumber } from 'class-validator';

export class CreateInvoiceDto {//All properties are read-only to maintain immutability
    
    uuid?: string;
    @IsString()
    readonly date: string;
    @IsNumber()
    readonly amount: number;
    @IsString()
    readonly payment_method: string;
    
  
}
