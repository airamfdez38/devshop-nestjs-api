import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional() //This decorator marks the property as optional so never gives an error if its missing or undefined
    @IsPositive() // It cheks if the value is greater thn zero
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
}
