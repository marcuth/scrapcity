import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonHtmlParsingModel = {
    name: {
        query: ".drag",
        extractor: extractInnerText,
    },
    pagePath: {
        extractor: extractAttribute("href"),
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    dragons: {
        query: ".drag_link:has(.drag)",
        model: dragonHtmlParsingModel,
        isGroup: true,
    },
    currentEvents: {
        query: "h3.see_ev.ev_evs ~ a.eata",
        model: deetlistEventHtmlParsingModel,
        isGroup: true,
    },
    upcomingEvents: {
        query: "h3.see_ev.ev_upc ~ a.eata",
        model: deetlistEventHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistAllDragonPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistAllDragonPageHtmlParsingModel
