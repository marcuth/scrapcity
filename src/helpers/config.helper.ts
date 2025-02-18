import { ValidationPipe } from "@nestjs/common"
import * as dotenv from "dotenv"

dotenv.config()

const isProduction = process.env.NODE_ENV === "production"
const frontendAppProtocol = isProduction ? "http" : "https"
const frontendAppPort = 3000
const frontendAppDomain = isProduction ? `localhost:${frontendAppPort}` : "xcrap.cloud"

const configHelper = {
    frontend: {
        address: `${frontendAppProtocol}://${frontendAppDomain}`,
    },
    isProduction: isProduction,
    app: {
        port: process.env.PORT || 3003,
        cors: {
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            origin: process.env.CORS_ORIGIN || true,
            credentials: true,
        },
    },
    defaultValidationPipe: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }),
}

export default configHelper