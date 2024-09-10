import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonParsingModel = {
    name: {
        query: ".drag",
        extractor: extractInnerText,
    },
    pagePath: {
        extractor: extractAttribute("href"),
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

const deetlistAllDragonPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistAllDragonPageParsingModel
