import { Injectable } from "@nestjs/common"
import { AxiosClient } from "xcrap/clients"
import { parse } from "node-html-parser"
 
import deetlistPuzzleIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-puzzle-islands-page.pmodel"
import deetlistHeroicRacesPageParsingModel from "src/scraping/parsing-models/deetlist-heroic-races-page.pmodel"
import deetlistGridIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-grid-islands-page.pmodel"
import deetlistRunnerIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-runner-islands.pmodel"
import deetlistFogIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-fog-islands-page.pmodel"
import deetlistAllDragonPageParsingModel from "src/scraping/parsing-models/deetlist-all-dragons-page.pmodel"
import deetlistMazeIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-maze-island.pmodel"
import deetlistEventsPageParsingModel from "src/scraping/parsing-models/deetlist-events-page.pmodel"
import deetlistHomePageParsingModel from "../../scraping/parsing-models/deetlist-home-page.pmodel"
import deetlistTowerIslandsPageParsingModel from "src/scraping/parsing-models/deetlist-tower-islands-page.pmodel"

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
        const pageData = pagePaser.parseItem({ model: deetlistEventsPageParsingModel })
        return pageData
    }

    async scrapeHeroicRacesEventPageData() {
        const url = `${this.baseUrl}/events/race`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistHeroicRacesPageParsingModel })
        return pageData
    }

    async scrapeMazeIslandsEventPageData() {
        const url = `${this.baseUrl}/events/maze`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistMazeIslandsPageParsingModel })
        return pageData
    }

    async scrapeRunnerIslandsEventPageData() {
        const url = `${this.baseUrl}/events/runner`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistRunnerIslandsPageParsingModel })
        return pageData
    }

    async scrapePuzzleIslandsEventPageData() {
        const url = `${this.baseUrl}/events/puzzle`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistPuzzleIslandsPageParsingModel })
        return pageData
    }

    async scrapeGridIslandsEventPageData() {
        const url = `${this.baseUrl}/events/grid`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistGridIslandsPageParsingModel })
        return pageData
    }

    async scrapeFogIslandsEventPageData() {
        const url = `${this.baseUrl}/events/fog`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistFogIslandsPageParsingModel })
        return pageData
    }

    async scrapeTowerIslandsEventPageData() {
        const url = `${this.baseUrl}/events/tower`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistTowerIslandsPageParsingModel })
        return pageData
    }

    async scrapeAllDragonsPageData() {
        const url = `${this.baseUrl}/all-dragons/`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistAllDragonPageParsingModel })
        return pageData
    }

    async scrapeBestHeroicDragonsByAttack() {}

    async scrapeNewestDragonsPageData() {}

    async scrapeAllHeroicDragonsPageData() {}

    async scrapeAllBreedableCategory5DragonsPageData() {}

    async scrapeAllBreedableCategory9DragonsPageData() {}

    async scrapeAllBreedableLegendaryDragonsPageData() {}

    async scrapeElementTokensPageData() {}

    async scrapeElementsPageData() {}

    async scrapeHeroicDragonsCategorizedByAttacksPageData() {}
}
