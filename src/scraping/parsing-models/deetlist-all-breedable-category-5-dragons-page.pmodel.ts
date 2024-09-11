import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonParsingModel = {
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
} satisfies ParsingModel

const pageBodyParsingModel = {
    dragons: {
        query: ".dlist",
        model: dragonParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies ParsingModel

const deetlistAllBreedableCategory5DragonsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistAllBreedableCategory5DragonsPageParsingModel
