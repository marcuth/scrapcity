import { Module } from "@nestjs/common"

import { DeetlistPagesController } from "./pages.controller"
import { DeetlistPagesService } from "./pages.service"

@Module({
    providers: [DeetlistPagesService],
    controllers: [DeetlistPagesController],
})
export class PagesModule {}
