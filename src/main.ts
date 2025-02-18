import { DocumentBuilder, SwaggerModule, OpenAPIObject } from "@nestjs/swagger"
import { NestFactory } from "@nestjs/core"

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

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { rawBody: true })

    app.enableCors(configHelper.app.cors)

    const config = new DocumentBuilder().setTitle("Documentação do Scrapcity").setVersion("1.0").build()
    const document = SwaggerModule.createDocument(app, config)

    if (!configHelper.isProduction) {
        await createSwaggerSpec(document)
    }

    SwaggerModule.setup("docs", app, document)

    await app.listen(configHelper.app.port)
}

bootstrap()