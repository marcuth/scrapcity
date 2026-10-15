import { ApiPropertyOptional } from "@nestjs/swagger"
import { IsEnum, IsOptional } from "class-validator"

export enum EventType {
    ALL = "all",
    FOG = "fog",
    GRID = "grid",
    RACE = "race",
    MAZE = "maze",
    RUNNER = "runner",
    PUZZLE = "puzzle",
    TOWER = "tower",
}

export class GetEventsQueryDto {
    @ApiPropertyOptional({
        enum: EventType,
        description: "Tipo específico de evento da ilha",
        default: EventType.ALL,
    })
    @IsOptional()
    @IsEnum(EventType)
    type?: EventType = EventType.ALL
}
