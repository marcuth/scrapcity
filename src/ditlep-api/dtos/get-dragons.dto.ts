import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class GetDragonsDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsNotEmpty()
    nameOrId?: string | number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    rarities?: string[]

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    isBreedable?: boolean

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    elements?: string[]

    @ApiProperty({ required: false })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    families?: string[]

    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt()
    category?: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsBoolean()
    inStore?: boolean

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
    tag?: string
}
