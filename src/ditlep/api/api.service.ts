import { Injectable } from "@nestjs/common"
import axios from "axios"
import qs from "qs"

type GetDragonOptions = {
    nameOrId?: string | number
    rarities?: string[]
    breedable?: boolean
    elements?: string[]
    families?: string[]
    inStore?: boolean
    category?: number
    pageNumber?: number
    pageSize?: number
    tag?: string
}

type GetAllArticlesOptions = {
    pageSize?: number
    pageIndex?: number
}

@Injectable()
export class DitlepApiService {
    private readonly baseUrl = "https://www.ditlep.com"

    private async fetchData(path: string, method?: string): Promise<any> {
        const url = `${this.baseUrl}${path}`

        const response = await axios.request({
            url: url,
            method: method ?? "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            }
        })

        return response.data
    }

    async getAllEvents() {
        const path = "/Dashboard/GetAllEvents"
        const data = this.fetchData(path)
        return data
    }

    async getAllArticles({
        pageIndex,
        pageSize
    }: GetAllArticlesOptions) {
        const query = qs.stringify({
            pageIndex: pageIndex || 0,
            pageSize: pageSize || 10
        })

        const path = `/article/GetAllArticles?${query}`
        const data = this.fetchData(path)
        
        return data
    }

    async getArticlesForMenu(pageSize: number) {
        const query = qs.stringify({ pageSize: pageSize })
        const path = `/article/GetArticlesForMenu?${query}`
        const data = this.fetchData(path)
        return data
    }

    async getCollectionableEvents() {
        const path = "/CollectibleEvents/GetAll"
        const data = this.fetchData(path)
        return data
    }

    async getPreviewCategoryDragons() {
        const path = "/Dragon/GetPreviewCategoryDragons"
        const data = this.fetchData(path)
        return data
    }

    async getHighlightDragon() {
        const path = "/Dragon/getHighlightDragon"
        const data = this.fetchData(path)
        return data
    }

    async getNewestDragons() {
        const path = "/Dragon/GetNewestDragon"
        const data = this.fetchData(path)
        return data
    }

    async getDragonAnimationFileNames(id: number) {
        const query = qs.stringify({ dragonId: id })
        const path = `/dragonAnimation/GetAnimation?${query}`
        const data = this.fetchData(path)
        return data
    }

    async getTopDragons() {
        const path = "/Information/GetTopDragons"
        const data = this.fetchData(path)
        return data
    }

    async getDragons({
        nameOrId,
        rarities,
        breedable,
        elements,
        families,
        inStore,
        pageNumber,
        pageSize,
        tag,
        category
    }: GetDragonOptions) {
        const query = qs.stringify({
            dragoName: nameOrId,
            rarities: rarities ? rarities.join(",") : undefined,
            breedable: breedable ? "true" : "false",
            elements: elements ? elements.join(",") : undefined,
            families: families ? families.join(",") : undefined,
            inStore: inStore ? "true" : "false",
            page: pageNumber,
            pageSize: pageSize,
            category: category,
            tag: tag
        })

        const path = `/Dragon/Search?${query}`
        const data = this.fetchData(path, "POST")

        return data
    }

    async getAllianceChestRanges() {
        const path = "/AllianceChest/getRanges"
        const data = this.fetchData(path)
        return data
    }

    async getCurrentAndUpcomingWizardHollow() {
        const path = "/WizardHollow/GetCurrentAndUpcoming"
        const data = this.fetchData(path)
        return data
    }

    async getOrbTrades() {
        const path = "/tradeOrb/GetAllTrades"
        const data = this.fetchData(path)
        return data
    }

    async getOrbTradeItem(id: string) {
        const query = qs.stringify({ id: id })
        const path = `/tradeOrb/getTrade?${query}`
        const data = this.fetchData(path)
        return data
    }

    async getAllTournament() {
        const path = "/Tournament/GetAll"
        const data = this.fetchData(path)
        return data
    }

    async getArenas() {
        const path = "/Arena/GetArenas"
        const data = this.fetchData(path)
        return data
    }

    async getDragonTv(month?: number) {
        const query = qs.stringify({ month: month })
        const path = `/DragonTv/Get?${query}`
        const data = this.fetchData(path)
        return data
    }
}
