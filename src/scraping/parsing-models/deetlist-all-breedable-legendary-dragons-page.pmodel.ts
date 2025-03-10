import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonHtmlParsingModel = {
    name: {
        query: ".smo",
        extractor: extractInnerText,
    },
    rarityClassName: {
        query: ".img_rar",
        extractor: extractAttribute("class"),
    },
    elementClassNames: {
        query: ".typ_i",
        extractor: extractAttribute("class"),
        fieldType: "multiple",
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    dragons: {
        query: ".over",
        model: dragonHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistAllBreedableLegendaryDragonsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistAllBreedableLegendaryDragonsPageHtmlParsingModel
