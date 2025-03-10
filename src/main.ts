import { DocumentBuilder, SwaggerModule, OpenAPIObject } from "@nestjs/swagger"
import { NestFactory } from "@nestjs/core"

import { INestApplication } from "@nestjs/common"

import configHelper from "./helpers/config.helper"
import { AppModule } from "./app.module"

async function createSwaggerSpec(document: OpenAPIObject) {
    const fs = await import("fs")

    document.servers = [
        {
            url: "http://localhost:3003",
            description: "Development",
        },
        {
            url: "https://scrapcity.onrender.com/",
            description: "Production",
        },
    ]

    await fs.promises.writeFile("./swagger-spec.json", JSON.stringify(document))
}
function createSwaggerDocs(app: INestApplication<any>) {
    const config = new DocumentBuilder()
        .setTitle("ScrapCity")
        .setDescription("Dragon City Data API")
        .setVersion("0.1")
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("docs", app, document)

    return document
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(configHelper.app.validationPipe)
    app.enableCors(configHelper.app.cors)

    const document = createSwaggerDocs(app)

    if (!configHelper.isProduction) {
        createSwaggerSpec(document)
    }

    await app.listen(configHelper.app.port)
}

bootstrap()
