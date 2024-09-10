import { Injectable } from "@nestjs/common"
import { AxiosClient } from "xcrap/clients"

import deetlistFogIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-fog-islands-page.pmodel"
import deetlistEventsPageParsinModel from "src/scraping/parsing-models/deetlist-events-page.pmodel"
import deetlistHomePageParsingModel from "../../scraping/parsing-models/deetlist-home-page.pmodel"

@Injectable()
export class DeetlistPagesService {
    private readonly baseUrl = "https://www.deetlist.com/dragoncity"
    private readonly client: AxiosClient

    constructor() {
        this.client = new AxiosClient()
    }

    async scrapeHomePageData() {
        const url = `${this.baseUrl}`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistHomePageParsingModel })
        return pageData
    }

    async scrapeEventsPageData() {
        const url = `${this.baseUrl}/events`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistEventsPageParsinModel })
        return pageData
    }

    async scrapeHeroicRacesEventPageData() {}

    async scrapeMazeIslandsEventPageData() {}

    async scrapeRunnerIslandsEventPageData() {}

    async scrapePuzzleIslandsEventPageData() {}

    async scrapeGridIslandsEventPageData() {}

    async scrapeFogIslandsEventPageData() {
        const url = `${this.baseUrl}/events/fog`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistFogIslandsPageParsingModel })
        return pageData
    }

    async scrapeTowerIslandsEventPageData() {}

    async scrapeAllDragonsPageData() {}

    async scrapeAllHeroicDragonsPageData() {}

    async scrapeAllBreedableCategory5DragonsPageData() {}

    async scrapeAllBreedableCategory9DragonsPageData() {}

    async scrapeAllBreedableLegendaryDragonsPageData() {}

    async scrapeElementTokensPageData() {}

    async scrapeElementsPageData() {}

    async scrapeHeroicDragonsCategorizedByAttacksPageData() {}
}
