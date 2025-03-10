import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonHtmlParsingModel = {
    name: {
        query: ".nnam",
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
        query: ".dlist",
        model: dragonHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistAllBreedableCategory5DragonsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistAllBreedableCategory5DragonsPageHtmlParsingModel
