import { IsString, IsNumber } from 'class-validator';

export class CreateInvoiceDto {
    @IsString()
    readonly date: string;
    @IsNumber()
    readonly amount: number;
    @IsString()
    readonly payment_method: string;
    
}
