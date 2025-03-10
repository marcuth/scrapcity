import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const elementTokenHtmlParsingModel = {
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
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    elementTokens: {
        query: "a:has(.emel)",
        model: elementTokenHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistElementTokensPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistElementTokensPageHtmlParsingModel
