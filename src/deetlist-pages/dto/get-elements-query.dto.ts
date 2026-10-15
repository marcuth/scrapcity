import { ApiPropertyOptional } from "@nestjs/swagger"
import { IsEnum, IsOptional } from "class-validator"

export enum ElementViewType {
    ELEMENTS = "elements",
    TOKENS = "tokens",
}

export class GetElementsQueryDto {
    @ApiPropertyOptional({
        enum: ElementViewType,
        description: "Visualizar elementos ou tokens de elementos",
        default: ElementViewType.ELEMENTS,
    })
    @IsOptional()
    @IsEnum(ElementViewType)
    type?: ElementViewType = ElementViewType.ELEMENTS
}
