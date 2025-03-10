import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const elementHtmlParsingModel = {
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
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    elements: {
        query: "a:has(.emel)",
        model: elementHtmlParsingModel,
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

const deetlistElementsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistElementsPageHtmlParsingModel
