import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class GetItemsDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nameOrId?: string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    sort?: string

    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    pageNumber?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    pageSize?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    group?: string
}
