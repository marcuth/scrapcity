import { Module } from "@nestjs/common"

import { DeetlistPagesModule } from "./deetlist/pages/pages.module"

@Module({
    imports: [DeetlistPagesModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
