import { NestFactory } from "@nestjs/core"

import { AppModule } from "./app.module"
import configHelper from "./helpers/config.helper"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(configHelper.app.validationPipe)
    app.enableCors(configHelper.app.corsOptions)

    await app.listen(configHelper.app.port)
}

bootstrap()
