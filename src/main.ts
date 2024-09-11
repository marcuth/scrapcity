
import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import * as dotenv from "dotenv"

import { AppModule } from "./app.module"

dotenv.config()

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = process.env.PORT ?? 3000

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            skipMissingProperties: false,
        }),
    )

    await app.listen(port)
}

bootstrap()
