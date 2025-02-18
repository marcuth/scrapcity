import { Controller, DefaultValuePipe, Get, ParseArrayPipe, ParseBoolPipe, ParseIntPipe, Query } from "@nestjs/common"
import { DitlepApiService } from "./api.service"

@Controller("ditlep/api")
export class DitlepApiController {
    constructor(private readonly ditlepApiService: DitlepApiService) {}

    @Get("alliances/chests")
    async getAllianceChests() {
        return await this.ditlepApiService.getAllianceChestRanges()
    }

    @Get("dragon-tv")
    async getDragonTv() {
        return await this.ditlepApiService.getDragonTv()
    }

    @Get("dragons")
    async getDragons(
        // @Query("nameOrId") nameOrId?: string | number,
        // @Query("rarities", new ParseArrayPipe({ optional: true, items: String })) rarities?: string[],
        // @Query("elements", new ParseArrayPipe({ optional: true, items: String })) elements?: string[],
        // @Query("pageNumber", new ParseIntPipe({ optional: true })) pageNumber?: number,
        // @Query("pageSize", new DefaultValuePipe(undefined), ParseIntPipe) pageSize?: number,
        // @Query("category", new DefaultValuePipe(undefined), ParseIntPipe) category?: number,
        // @Query("inStore", new ParseBoolPipe({ optional: true })) inStore?: boolean,
        // @Query("breedable", new ParseBoolPipe({ optional: true })) breedable?: boolean,
        // @Query("families", new ParseArrayPipe({ optional: true, items: String })) families?: string[],
        // @Query("tag") tag?: string
    ) {
        return await this.ditlepApiService.getDragons({
            // nameOrId: nameOrId,
            // rarities: rarities,
            // breedable: breedable,
            // elements: elements,
            // families: families,
            // inStore: inStore,
            // category: category,
            // pageNumber: pageNumber,
            // pageSize: pageSize,
            // tag: tag
        })
    }

    @Get("items")
    async getItems(
        @Query("nameOrId") nameOrId?: string | number,
        @Query("sort") sort?: string,
        @Query("pageNumber") pageNumber?: number,
        @Query("pageSize") pageSize?: number,
        @Query("group") group?: string
    ) {}

    @Get("calculators/breeding")
    async getBreedingCalculatorResult(
        @Query("parentIds") parentIds: [number, number]
    ) {}

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
