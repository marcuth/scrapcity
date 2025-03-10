import { Injectable } from "@nestjs/common"
import { AxiosClient } from "xcrap/clients"

import deetlistAllBreedableCategory9DragonsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-all-breedable-category-9-dragons-page.pmodel"
import deetlistAllBreedableCategory5DragonsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-all-breedable-category-5-dragons-page.pmodel"
import deetlistAllBreedableLegendaryDragonsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-all-breedable-legendary-dragons-page.pmodel"
import deetlistHeroicDragonsCategorizedByAttacksHtmlParsingModel from "../scraping/parsing-models/deetlist-best-heroic-dragons-by-attack.pmodel"
import deetlistAllHeroicDragonsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-all-heroic-dragons-page.pmodel"
import deetlistPuzzleIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-puzzle-islands-page.pmodel"
import deetlistElementTokensPageHtmlParsingModel from "../scraping/parsing-models/deetlist-element-tokens-page.pmodel"
import deetlistNewestDragonsPageHtmlParsingModel from "../scraping/parsing-models/deetlits-newest-dragons-page.pmodel"
import deetlistTowerIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-tower-islands-page.pmodel"
import deetlistHeroicRacesPageHtmlParsingModel from "../scraping/parsing-models/deetlist-heroic-races-page.pmodel"
import deetlistGridIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-grid-islands-page.pmodel"
import deetlistRunnerIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-runner-islands.pmodel"
import deetlistFogIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-fog-islands-page.pmodel"
import deetlistAllDragonPageHtmlParsingModel from "../scraping/parsing-models/deetlist-all-dragons-page.pmodel"
import deetlistMazeIslandsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-maze-island.pmodel"
import deetlistElementsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-elements-page.pmodel"
import deetlistEventsPageHtmlParsingModel from "../scraping/parsing-models/deetlist-events-page.pmodel"
import deetlistDragonPageHtmlParsingModel from "../scraping/parsing-models/deetlist-dragon-page.pmodel"
import deetlistHomePageHtmlParsingModel from "../scraping/parsing-models/deetlist-home-page.pmodel"
import { HtmlParser } from "xcrap/parsing"

@Injectable()
export class DeetlistPagesService {
    private readonly baseUrl = "https://www.deetlist.com/dragoncity"
    private readonly client: AxiosClient

    constructor() {
        this.client = new AxiosClient({ 
            parserType: "html"
        })
    }

    async scrapeHomePageData() {
        const url = `${this.baseUrl}`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistHomePageHtmlParsingModel })
        return pageData
    }

    async scrapeEventsPageData() {
        const url = `${this.baseUrl}/events`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistEventsPageHtmlParsingModel })
        return pageData
    }

    async scrapeHeroicRacesEventPageData() {
        const url = `${this.baseUrl}/events/race`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistHeroicRacesPageHtmlParsingModel })
        return pageData
    }

    async scrapeMazeIslandsEventPageData() {
        const url = `${this.baseUrl}/events/maze`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistMazeIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapeRunnerIslandsEventPageData() {
        const url = `${this.baseUrl}/events/runner`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistRunnerIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapePuzzleIslandsEventPageData() {
        const url = `${this.baseUrl}/events/puzzle`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistPuzzleIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapeGridIslandsEventPageData() {
        const url = `${this.baseUrl}/events/grid`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistGridIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapeFogIslandsEventPageData() {
        const url = `${this.baseUrl}/events/fog`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistFogIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapeTowerIslandsEventPageData() {
        const url = `${this.baseUrl}/events/tower`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistTowerIslandsPageHtmlParsingModel })
        return pageData
    }

    async scrapeAllDragonsPageData() {
        const url = `${this.baseUrl}/all-dragons/`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistAllDragonPageHtmlParsingModel })
        return pageData
    }

    async scrapeHeroicDragonsCategorizedByAttacksPageData() {
        const url = `${this.baseUrl}/dragons/report/heroics_by_attack.php`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistHeroicDragonsCategorizedByAttacksHtmlParsingModel })
        return pageData
    }

    async scrapeNewestDragonsPageData() {
        const url = `${this.baseUrl}/new-dragons/`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistNewestDragonsPageHtmlParsingModel })
        return pageData
    }

    async scrapeAllHeroicDragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/all_heroic.php`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistAllHeroicDragonsPageHtmlParsingModel })
        return pageData
    }

    async scrapeAllBreedableCategory5DragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/cat5_breedable.php`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistAllBreedableCategory5DragonsPageHtmlParsingModel })
        return pageData
    }

    async scrapeAllBreedableCategory9DragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/cat9_breedable.php`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistAllBreedableCategory9DragonsPageHtmlParsingModel })
        return pageData
    }

    async scrapeAllBreedableLegendaryDragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/leg_breedable.php`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistAllBreedableLegendaryDragonsPageHtmlParsingModel })
        return pageData
    }

    async scrapeElementTokensPageData() {
        const url = `${this.baseUrl}/tokens/`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistElementTokensPageHtmlParsingModel })
        return pageData
    }

    async scrapeElementsPageData() {
        const url = `${this.baseUrl}/elements/`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistElementsPageHtmlParsingModel })
        return pageData
    }

    async scrapeDragonPageData(name: string) {
        const url = `${this.baseUrl}/dragon/${name}`
        const htmlParser = await this.client.get<HtmlParser>({ url: url })
        const pageData = htmlParser.parseItem({ model: deetlistDragonPageHtmlParsingModel })
        return pageData
    }
}
