import { ValidationPipe } from "@nestjs/common"
import * as dotenv from "dotenv"

dotenv.config()

const configHelper = {
    app: {
        port: process.env.PORT || 3003,
        validationPipe: new ValidationPipe({
            whitelist: true,
            transform: true,
            skipMissingProperties: false,
        }),
        corsOptions: {
            origin: true,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            credentials: true,
        },
    },
}

export default configHelper
