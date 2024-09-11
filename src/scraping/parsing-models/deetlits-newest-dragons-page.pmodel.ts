import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonParsingModel = {
    name: {
        query: ".rn",
        extractor: extractInnerText,
    },
    imagePath: {
        query: ".newi",
        extractor: extractAttribute("src"),
    },
    pagePath: {
        extractor: extractAttribute("href"),
    },
    rarityClassName: {
        query: ".img_rar",
        extractor: extractAttribute("class"),
    },
    releaseTime: {
        query: ".rt",
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
    dragons: {
        query: ".drag_link:has(.drag)",
        model: dragonParsingModel,
        isGroup: true,
    },
    currentEvents: {
        query: "h3.see_ev.ev_evs ~ a.eata",
        model: deetlistEventParsingModel,
        isGroup: true,
    },
    upcomingEvents: {
        query: "h3.see_ev.ev_upc ~ a.eata",
        model: deetlistEventParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies ParsingModel

const deetlistNewestDragonsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistNewestDragonsPageParsingModel
