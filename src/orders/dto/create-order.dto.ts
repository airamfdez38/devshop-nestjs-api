import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
    @IsString()
    readonly date: string;
    @IsNumber()
    readonly amount: number;
    @IsNumber()
    readonly total: number;
  
}
