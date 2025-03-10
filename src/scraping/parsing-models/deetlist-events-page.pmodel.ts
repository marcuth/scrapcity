import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import eventPageBodyEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const pageBodyHtmlParsingModel = {
    heading: {
        query: "h1",
        extractor: extractInnerText,
    },
    currentEvents: {
        query: "h3.see_ev.ev_evs ~ a.eata",
        model: eventPageBodyEventHtmlParsingModel,
        isGroup: true,
    },
    upcomingEvents: {
        query: "h3.see_ev.ev_upc ~ a.eata",
        model: eventPageBodyEventHtmlParsingModel,
        isGroup: true,
    },
    pastEvents: {
        query: "h3.see_ev.ev_past ~ a.eata",
        model: eventPageBodyEventHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistEventsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistEventsPageHtmlParsingModel
