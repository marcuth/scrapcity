import { ApiPropertyOptional } from "@nestjs/swagger"
import { IsEnum, IsOptional } from "class-validator"

export enum DragonFilter {
    ALL = "all",
    NEWEST = "newest",
    ALL_HEROIC = "all-heroic",
    HEROIC_BY_ATTACK = "heroic-by-attack",
}

export enum DragonBreedableCategory {
    CAT_5 = "cat-5",
    CAT_9 = "cat-9",
    LEGENDARY = "legendary",
}

export class GetDragonsQueryDto {
    @ApiPropertyOptional({
        enum: DragonFilter,
        description: "Filtro principal para listagem de dragões",
        default: DragonFilter.ALL,
    })
    @IsOptional()
    @IsEnum(DragonFilter)
    filter?: DragonFilter = DragonFilter.ALL

    @ApiPropertyOptional({
        enum: DragonBreedableCategory,
        description: "Filtro por dragões breedable por categoria ou raridade",
    })
    @IsOptional()
    @IsEnum(DragonBreedableCategory)
    breedable?: DragonBreedableCategory
}
