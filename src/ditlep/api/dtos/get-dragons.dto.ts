import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class GetDragonsDto {
    @IsOptional()
    @IsNotEmpty()
    nameOrId?: string | number

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    rarities?: string[]

    @IsOptional()
    @IsBoolean()
    isBreedable?: boolean

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    elements?: string[]

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    families?: string[]

    @IsOptional()
    @IsInt()
    category?: number

    @IsOptional()
    @IsBoolean()
    inStore?: boolean

    @IsOptional()
    @IsInt()
    pageNumber?: number

    @IsOptional()
    @IsInt()
    pageSize?: number

    @IsOptional()
    @IsString()
    tag?: string
}
