import { Controller, Get, Query } from "@nestjs/common"

@Controller("ditlep/api")
export class DitlepApiController {
    @Get("alliances/chests")
    async getAllianceChests() {}

    @Get("dragon-tv")
    async getDragonTV() {}

    @Get("dragons")
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
    async getFogIslandsEvent(@Query("id") id?: string) {}

    @Get("events/grid-islands")
    async getGridIslandsEvent(@Query("id") id?: string) {}

    @Get("events/heroic-races")
    async getHeroicRacesEvent(@Query("id") id?: string) {}

    @Get("events/maze-islands")
    async getMazeIslandsEvent(@Query("id") id?: string) {}

    @Get("events/puzzle-islands")
    async getPuzzleIslandsEvent(@Query("id") id?: string) {}

    @Get("events/runner-islands")
    async getRunnerIslandsEvent(@Query("id") id?: string) {}

    @Get("events/tower-islands")
    async getTowerIslandsEvent(@Query("id") id?: string) {}
}
