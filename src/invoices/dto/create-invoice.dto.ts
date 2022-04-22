import { IsString } from "class-validator";

export class CreateInvoiceDto {
    @IsString()
    readonly date: string;
    @IsString()
    readonly amount: number;
    @IsString()
    readonly payment_method: string;
    
}
