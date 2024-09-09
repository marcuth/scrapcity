import { Controller, Get } from "@nestjs/common"
import { DeetlistPagesService } from "./pages.service"

@Controller("deetlist/pages")
export class DeetlistPagesController {
    constructor(private readonly deetlistPagesService: DeetlistPagesService) {}

    @Get("home")
    async getHomePage() {
        return await this.deetlistPagesService.scrapeHomePageData()
    }

    @Get("events")
    async getEventsPage() {
        return await this.deetlistPagesService.scrapeEventsPageData()
    }

    @Get("events/fog-islands")
    async getFogIslandsEventPage() {
        return await this.deetlistPagesService.scrapeFogIslandsEventPageData()
    }

    @Get("events/grid-islands")
    async getGridIslandsEventPage() {
        return await this.deetlistPagesService.scrapeGridIslandsEventPageData()
    }

    @Get("events/heroic-races")
    async getHeroicRacesEventPage() {
        return await this.deetlistPagesService.scrapeHeroicRacesEventPageData()
    }

    @Get("events/maze-islands")
    async getMazeIslandsEventPage() {
        return await this.deetlistPagesService.scrapeMazeIslandsEventPageData()
    }

    @Get("events/runner-islands")
    async getRunnerIslandsEventPage() {
        return await this.deetlistPagesService.scrapeRunnerIslandsEventPageData()
    }

    @Get("events/puzzle-islands")
    async getPuzzleIslandsEventPage() {
        return await this.deetlistPagesService.scrapePuzzleIslandsEventPageData()
    }

    @Get("events/tower-islands")
    async getTowerIslandsEventPage() {
        return await this.deetlistPagesService.scrapeTowerIslandsEventPageData()
    }

    @Get("dragons/all")
    async getAllDragonsPage() {
        return await this.deetlistPagesService.scrapeAllDragonsPageData()
    }
    
    @Get("dragons/breedable-category-5")
    async getAllBreedableCategory5DragonsPage() {
        return await this.deetlistPagesService.scrapeAllBreedableCategory5DragonsPageData()
    }

    @Get("dragons/all-heroic")
    async getAllHeroicDragonsPage() {
        return await this.deetlistPagesService.scrapeAllHeroicDragonsPageData()
    }
    
    @Get("dragons/breedable-category-9")
    async getAllBreedableCategory9DragonsPage() {
        return await this.deetlistPagesService.scrapeAllBreedableCategory9DragonsPageData()
    }
    
    @Get("dragons/breedable-legendary")
    async getAllBreedableLegendaryDragonsPage() {
        return await this.deetlistPagesService.scrapeAllBreedableLegendaryDragonsPageData()
    }

    @Get("dragons/categorize-by-attacks")
    async getHeroicDragonsCategorizedByAttacksPage() {
        return await this.deetlistPagesService.scrapeHeroicDragonsCategorizedByAttacksPageData()
    }
    
    @Get("element-tokens")
    async getElementTokensPage() {
        return await this.deetlistPagesService.scrapeElementTokensPageData()
    }
    
    @Get("elements")
    async getElementsPage() {
        return await this.deetlistPagesService.scrapeElementsPageData()
    }
}
