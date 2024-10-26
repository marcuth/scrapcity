import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class GetItemsDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    nameOrId?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    sort?: string

    @IsOptional()
    @IsInt()
    pageNumber?: number

    @IsOptional()
    @IsInt()
    pageSize?: number

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    group?: string
}
