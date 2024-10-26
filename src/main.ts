import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { NestFactory } from "@nestjs/core"

import { INestApplication } from "@nestjs/common"

import configHelper from "./helpers/config.helper"
import { AppModule } from "./app.module"

function createSwaggerDocs(app: INestApplication<any>) {
    const config = new DocumentBuilder()
        .setTitle("ScrapCity")
        .setDescription("Dragon City Data API")
        .setVersion("0.1")
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("docs", app, document)
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(configHelper.app.validationPipe)
    app.enableCors(configHelper.app.corsOptions)

    createSwaggerDocs(app)

    await app.listen(configHelper.app.port)
}

bootstrap()
