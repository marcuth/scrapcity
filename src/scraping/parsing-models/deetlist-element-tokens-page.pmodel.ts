import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const elementTokenParsingModel = {
    name: {
        query: ".emel",
        extractor: extractInnerText,
    },
    icon: {
        query: ".tok",
        extractor: extractAttribute("src"),
    },
    pagePath: {
        extractor: extractAttribute("href"),
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
    elementTokens: {
        query: "a:has(.emel)",
        model: elementTokenParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies ParsingModel

const deetlistElementTokensPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistElementTokensPageParsingModel
