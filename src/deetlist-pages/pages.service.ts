import { ExtractionModel } from "@xcrap/extractor"
import { Injectable } from "@nestjs/common"
import { FetchClient } from "@xcrap/core"

import {
    deetlistAllDragonsPageExtractionModel,
    deetlistAllHeroicDragonsPageExtractionModel,
    deetlistBreedableCategory5DragonsPageExtractionModel,
    deetlistBreedableCategory9DragonsPageExtractionModel,
    deetlistBreedableLegendaryDragonsPageExtractionModel,
    deetlistDragonPageExtractionModel,
    deetlistElementsPageExtractionModel,
    deetlistElementTokensPageExtractionModel,
    deetlistEventsPageExtractionModel,
    deetlistFogIslandsPageExtractionModel,
    deetlistGridIslandsPageExtractionModel,
    deetlistHeroicDragonsByAttackExtractionModel,
    deetlistHeroicRacesPageExtractionModel,
    deetlistHomePageExtractionModel,
    deetlistMazeIslandsPageExtractionModel,
    deetlistNewestDragonsPageExtractionModel,
    deetlistPuzzleIslandsPageExtractionModel,
    deetlistRunnerIslandsPageExtractionModel,
    deetlistTowerIslandsPageExtractionModel,
} from "../scraping/extraction-models/deetlist.extraction-models"
import { DragonBreedableCategory, DragonFilter, GetDragonsQueryDto } from "./dto/get-dragons-query.dto"
import { ElementViewType, GetElementsQueryDto } from "./dto/get-elements-query.dto"
import { EventType, GetEventsQueryDto } from "./dto/get-events-query.dto"

@Injectable()
export class DeetlistPagesService {
    private readonly baseUrl = "https://www.deetlist.com/dragoncity"
    private readonly client: FetchClient

    constructor() {
        this.client = new FetchClient()
    }

    private async extractPageData<T>(url: string, model: ExtractionModel<T>): Promise<T> {
        const response = await this.client.fetch({ url })
        const htmlParser = response.asHtmlParser()
        return await htmlParser.extractModel({ model })
    }

    async getHomePage() {
        return await this.extractPageData(this.baseUrl, deetlistHomePageExtractionModel)
    }

    async getDragons(query: GetDragonsQueryDto) {
        if (query.breedable) {
            switch (query.breedable) {
                case DragonBreedableCategory.CAT_5:
                    return await this.extractPageData(
                        `${this.baseUrl}/dragons/report/cat5_breedable.php`,
                        deetlistBreedableCategory5DragonsPageExtractionModel,
                    )
                case DragonBreedableCategory.CAT_9:
                    return await this.extractPageData(
                        `${this.baseUrl}/dragons/report/cat9_breedable.php`,
                        deetlistBreedableCategory9DragonsPageExtractionModel,
                    )
                case DragonBreedableCategory.LEGENDARY:
                    return await this.extractPageData(
                        `${this.baseUrl}/dragons/report/leg_breedable.php`,
                        deetlistBreedableLegendaryDragonsPageExtractionModel,
                    )
            }
        }

        switch (query.filter) {
            case DragonFilter.NEWEST:
                return await this.extractPageData(
                    `${this.baseUrl}/new-dragons/`,
                    deetlistNewestDragonsPageExtractionModel,
                )
            case DragonFilter.ALL_HEROIC:
                return await this.extractPageData(
                    `${this.baseUrl}/dragons/report/all_heroic.php`,
                    deetlistAllHeroicDragonsPageExtractionModel,
                )
            case DragonFilter.HEROIC_BY_ATTACK:
                return await this.extractPageData(
                    `${this.baseUrl}/dragons/report/heroics_by_attack.php`,
                    deetlistHeroicDragonsByAttackExtractionModel,
                )
            case DragonFilter.ALL:
            default:
                return await this.extractPageData(`${this.baseUrl}/all-dragons/`, deetlistAllDragonsPageExtractionModel)
        }
    }

    async getDragonByName(name: string) {
        return await this.extractPageData(`${this.baseUrl}/dragon/${name}`, deetlistDragonPageExtractionModel)
    }

    async getEvents(query: GetEventsQueryDto) {
        switch (query.type) {
            case EventType.FOG:
                return await this.extractPageData(`${this.baseUrl}/events/fog`, deetlistFogIslandsPageExtractionModel)
            case EventType.GRID:
                return await this.extractPageData(`${this.baseUrl}/events/grid`, deetlistGridIslandsPageExtractionModel)
            case EventType.RACE:
                return await this.extractPageData(`${this.baseUrl}/events/race`, deetlistHeroicRacesPageExtractionModel)
            case EventType.MAZE:
                return await this.extractPageData(`${this.baseUrl}/events/maze`, deetlistMazeIslandsPageExtractionModel)
            case EventType.RUNNER:
                return await this.extractPageData(
                    `${this.baseUrl}/events/runner`,
                    deetlistRunnerIslandsPageExtractionModel,
                )
            case EventType.PUZZLE:
                return await this.extractPageData(
                    `${this.baseUrl}/events/puzzle`,
                    deetlistPuzzleIslandsPageExtractionModel,
                )
            case EventType.TOWER:
                return await this.extractPageData(
                    `${this.baseUrl}/events/tower`,
                    deetlistTowerIslandsPageExtractionModel,
                )
            case EventType.ALL:
            default:
                return await this.extractPageData(`${this.baseUrl}/events`, deetlistEventsPageExtractionModel)
        }
    }

    async getElements(query: GetElementsQueryDto) {
        if (query.type === ElementViewType.TOKENS) {
            return await this.extractPageData(`${this.baseUrl}/tokens/`, deetlistElementTokensPageExtractionModel)
        }

        return await this.extractPageData(`${this.baseUrl}/elements/`, deetlistElementsPageExtractionModel)
    }
}
