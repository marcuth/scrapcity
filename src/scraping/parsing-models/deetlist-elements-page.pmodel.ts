import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const elementParsingModel = {
    name: {
        query: ".emel",
        extractor: extractInnerText,
    },
    icon: {
        query: "img",
        extractor: extractAttribute("src"),
    },
    pagePath: {
        extractor: extractAttribute("href"),
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
    elements: {
        query: "a:has(.emel)",
        model: elementParsingModel,
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

const deetlistElementsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistElementsPageParsingModel
