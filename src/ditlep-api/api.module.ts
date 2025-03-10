import { Module } from "@nestjs/common"

import { DitlepApiController } from "./api.controller"
import { DitlepApiService } from "./api.service"

@Module({
    providers: [DitlepApiService],
    controllers: [DitlepApiController],
})
export class DitlepApiModule {}
