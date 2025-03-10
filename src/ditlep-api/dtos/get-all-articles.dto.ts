import { IsNumber, IsOptional, IsPositive } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class GetAllArticlesDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    pageSize?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    pageIndex?: number
}
