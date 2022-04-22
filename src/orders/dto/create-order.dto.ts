import { IsString } from "class-validator";

export class CreateOrderDto {
    @IsString()
    readonly date: string;
    @IsString()
    readonly amount: number;
    @IsString()
    readonly total: number;
  
}
