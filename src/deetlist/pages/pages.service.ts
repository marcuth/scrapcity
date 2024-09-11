import { Injectable } from "@nestjs/common"
import { AxiosClient } from "xcrap/clients"

import deetlistAllBreedableCategory9DragonsPageParsingModel from "../../scraping/parsing-models/deetlist-all-breedable-category-9-dragons-page.pmodel"
import deetlistAllBreedableCategory5DragonsPageParsingModel from "../../scraping/parsing-models/deetlist-all-breedable-category-5-dragons-page.pmodel"
import deetlistAllBreedableLegendaryDragonsPageParsingModel from "../../scraping/parsing-models/deetlist-all-breedable-legendary-dragons-page.pmodel"
import deetlistHeroicDragonsCategorizedByAttacksParsingModel from "../../scraping/parsing-models/deetlist-best-heroic-dragons-by-attack.pmodel"
import deetlistAllHeroicDragonsPageParsingModel from "../../scraping/parsing-models/deetlist-all-heroic-dragons-page.pmodel"
import deetlistPuzzleIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-puzzle-islands-page.pmodel"
import deetlistElementTokensPageParsingModel from "../../scraping/parsing-models/deetlist-element-tokens-page.pmodel"
import deetlistNewestDragonsPageParsingModel from "../../scraping/parsing-models/deetlits-newest-dragons-page.pmodel"
import deetlistTowerIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-tower-islands-page.pmodel"
import deetlistHeroicRacesPageParsingModel from "../../scraping/parsing-models/deetlist-heroic-races-page.pmodel"
import deetlistGridIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-grid-islands-page.pmodel"
import deetlistRunnerIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-runner-islands.pmodel"
import deetlistFogIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-fog-islands-page.pmodel"
import deetlistAllDragonPageParsingModel from "../../scraping/parsing-models/deetlist-all-dragons-page.pmodel"
import deetlistMazeIslandsPageParsingModel from "../../scraping/parsing-models/deetlist-maze-island.pmodel"
import deetlistElementsPageParsingModel from "../../scraping/parsing-models/deetlist-elements-page.pmodel"
import deetlistEventsPageParsingModel from "../../scraping/parsing-models/deetlist-events-page.pmodel"
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

    async scrapeHeroicDragonsCategorizedByAttacksPageData() {
        const url = `${this.baseUrl}/dragons/report/heroics_by_attack.php`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistHeroicDragonsCategorizedByAttacksParsingModel })
        return pageData
    }

    async scrapeNewestDragonsPageData() {
        const url = `${this.baseUrl}/new-dragons/`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistNewestDragonsPageParsingModel })
        return pageData
    }

    async scrapeAllHeroicDragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/all_heroic.php`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistAllHeroicDragonsPageParsingModel })
        return pageData
    }

    async scrapeAllBreedableCategory5DragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/cat5_breedable.php`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistAllBreedableCategory5DragonsPageParsingModel })
        return pageData
    }

    async scrapeAllBreedableCategory9DragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/cat9_breedable.php`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistAllBreedableCategory9DragonsPageParsingModel })
        return pageData
    }

    async scrapeAllBreedableLegendaryDragonsPageData() {
        const url = `${this.baseUrl}/dragons/report/leg_breedable.php`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistAllBreedableLegendaryDragonsPageParsingModel })
        return pageData
    }

    async scrapeElementTokensPageData() {
        const url = `${this.baseUrl}/tokens/`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistElementTokensPageParsingModel })
        return pageData
    }

    async scrapeElementsPageData() {
        const url = `${this.baseUrl}/elements/`
        const pagePaser = await this.client.get(url)
        const pageData = pagePaser.parseItem({ model: deetlistElementsPageParsingModel })
        return pageData
    }
}
