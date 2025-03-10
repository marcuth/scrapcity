import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventDragonHtmlParsingModel from "./common/deetlist-event-dragon.pmodel"
import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const pageBodyHtmlParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    eventDuration: {
        query: ".dur_text",
        extractor: extractInnerText,
    },
    dragons: {
        query: ".over",
        model: deetlistEventDragonHtmlParsingModel,
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

const deetlistRunnerIslandsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistRunnerIslandsPageHtmlParsingModel
