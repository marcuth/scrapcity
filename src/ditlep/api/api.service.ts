import { Injectable } from "@nestjs/common"
import axios from "axios"

import { GetDragonsDto } from "./dtos/get-dragons.dto"
import { GetItemsDto } from "./dtos/get-items.dto"
import qs from "qs"

type GetAllArticlesOptions = {
    pageSize?: number
    pageIndex?: number
}

@Injectable()
export class DitlepApiService {
    private readonly baseUrl = "https://www.ditlep.com"

    private async fetchData(path: string): Promise<any> {
        const url = `${this.baseUrl}${path}`
        const response = await axios.get(url)
        return response.data
    }

    async getAllEvents() {
        const path = "/Dashboard/GetAllEvents"
        const data = this.fetchData(path)
        return data
    }

    async getAllArticles({ pageIndex, pageSize }: GetAllArticlesOptions) {
        const query = qs.stringify({
            pageIndex: pageIndex || 0,
            pageSize: pageSize || 10,
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
        isBreedable,
        elements,
        families,
        inStore,
        category,
        pageNumber,
        pageSize,
        tag,
    }: GetDragonsDto) {
        const query = qs.stringify({
            dragoName: nameOrId,
            rarities: rarities ? rarities.join(",") : undefined,
            breedable: isBreedable ? "true" : "false",
            elements: elements ? elements.join(",") : undefined,
            families: families ? families.join(",") : undefined,
            category: category ? category : undefined,
            inStore: inStore ? "true" : "false",
            page: pageNumber,
            pageSize: pageSize,
            tag: tag,
        })

        const path = `/Dragon/Search?${query}`
        const data = this.fetchData(path)

        return data
    }

    async getItems({ group, nameOrId, pageNumber, pageSize, sort }: GetItemsDto) {
        const query = qs.stringify({
            dragoName: nameOrId,
            page: pageNumber,
            pageSize: pageSize,
            sort: sort ? sort : undefined,
            group: group ? group : undefined
        })

        const path = `?${query}`
        const data = this.fetchData(path)

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
}
