import { Module } from "@nestjs/common"

import { DeetlistPagesModule } from "./deetlist-pages/pages.module"
import { DitlepApiModule } from "./ditlep-api/api.module"

@Module({
    imports: [DeetlistPagesModule, DitlepApiModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
