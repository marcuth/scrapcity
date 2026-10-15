import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger"
import { Controller, Get, Param, Query } from "@nestjs/common"

import { GetElementsQueryDto } from "./dto/get-elements-query.dto"
import { GetDragonsQueryDto } from "./dto/get-dragons-query.dto"
import { GetEventsQueryDto } from "./dto/get-events-query.dto"
import { DeetlistPagesService } from "./pages.service"

@ApiTags("Deetlist")
@Controller("deetlist")
export class DeetlistPagesController {
    constructor(private readonly deetlistPagesService: DeetlistPagesService) {}

    @Get("home")
    @ApiOperation({ summary: "Obtém dados da página inicial do Deetlist (eventos, metadados e scripts)" })
    async getHomePage() {
        return await this.deetlistPagesService.getHomePage()
    }

    @Get("dragons")
    @ApiOperation({
        summary: "Lista dragões com filtros por tipo (newest, all-heroic, heroic-by-attack) ou categoria breedable",
    })
    async getDragons(@Query() query: GetDragonsQueryDto) {
        return await this.deetlistPagesService.getDragons(query)
    }

    @Get("dragons/:name")
    @ApiOperation({ summary: "Obtém detalhes completos de um dragão específico pelo nome/slug" })
    @ApiParam({ name: "name", description: "Nome ou slug do dragão (ex: high-master-karma)" })
    async getDragonByName(@Param("name") name: string) {
        return await this.deetlistPagesService.getDragonByName(name)
    }

    @Get("events")
    @ApiOperation({
        summary: "Obtém eventos gerais ou específicos de ilha (fog, grid, race, maze, runner, puzzle, tower)",
    })
    async getEvents(@Query() query: GetEventsQueryDto) {
        return await this.deetlistPagesService.getEvents(query)
    }

    @Get("elements")
    @ApiOperation({ summary: "Lista elementos do jogo ou tokens de elementos" })
    async getElements(@Query() query: GetElementsQueryDto) {
        return await this.deetlistPagesService.getElements(query)
    }
}
