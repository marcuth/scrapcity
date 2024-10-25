import { Controller, Get, Query } from "@nestjs/common"
import { ApiQuery } from "@nestjs/swagger";

@Controller("ditlep/api")
export class DitlepApiController {
    @Get("alliances/chests")
    async getAllianceChests() {}

    @Get("dragon-tv")
    async getDragonTV() {}

    @Get("dragons")
    @ApiQuery({ name: "nameOrId", required: false })
    @ApiQuery({ name: "rarities", required: false })
    @ApiQuery({ name: "elements", required: false })
    @ApiQuery({ name: "pageNumber", required: false })
    @ApiQuery({ name: "pageSize", required: false })
    @ApiQuery({ name: "category", required: false })
    @ApiQuery({ name: "inStore", required: false })
    @ApiQuery({ name: "isBreedable", required: false })
    @ApiQuery({ name: "tag", required: false })
    async getDragons(
        @Query("nameOrId") nameOrId?: string | number,
        @Query("rarities") rarities?: string[],
        @Query("elements") elements?: string,
        @Query("pageNumber") pageNumber?: number,
        @Query("pageSize") pageSize?: number,
        @Query("category") categor?: number,
        @Query("inStore") inStore?: boolean,
        @Query("isBreedable") isBreedable?: boolean,
        @Query("tag") tag?: string,
    ) {}

    @Get("items")
    @ApiQuery({ name: "nameOrId", required: false })
    @ApiQuery({ name: "sort", required: false })
    @ApiQuery({ name: "pageNumber", required: false })
    @ApiQuery({ name: "pageSize", required: false })
    @ApiQuery({ name: "group", required: false })
    async getItems(
        @Query("nameOrId") nameOrId?: string | number,
        @Query("sort") sort?: string,
        @Query("pageNumber") pageNumber?: number,
        @Query("pageSize") pageSize?: number,
        @Query("group") group?: string,
    ) {}

    @Get("calculators/breeding")
    async getBreedingCalculatorResult(@Query("parentIds") parentIds: [number, number]) {}

    @Get("quests/permanet")
    async getPermanetQuests() {}

    @Get("quests/temporary")
    async getTemporaryQuests() {}

    @Get("events/fog-islands")
    @ApiQuery({ name: "id", required: false })
    async getFogIslandsEvent(@Query("id") id?: string) {}

    @Get("events/grid-islands")
    @ApiQuery({ name: "id", required: false })
    async getGridIslandsEvent(@Query("id") id?: string) {}

    @Get("events/heroic-races")
    @ApiQuery({ name: "id", required: false })
    async getHeroicRacesEvent(@Query("id") id?: string) {}

    @Get("events/maze-islands")
    @ApiQuery({ name: "id", required: false })
    async getMazeIslandsEvent(@Query("id") id?: string) {}

    @Get("events/puzzle-islands")
    @ApiQuery({ name: "id", required: false })
    async getPuzzleIslandsEvent(@Query("id") id?: string) {}

    @Get("events/runner-islands")
    @ApiQuery({ name: "id", required: false })
    async getRunnerIslandsEvent(@Query("id") id?: string) {}

    @Get("events/tower-islands")
    @ApiQuery({ name: "id", required: false })
    async getTowerIslandsEvent(@Query("id") id?: string) {}
}
