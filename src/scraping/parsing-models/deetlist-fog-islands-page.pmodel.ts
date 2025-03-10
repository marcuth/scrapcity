import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventDragonHtmlParsingModel from "./common/deetlist-event-dragon.pmodel"
import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
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
    textAboutCollectingPoints: {
        query: ".tkn_text",
        extractor: extractInnerText,
    },
    totalPointsPerCollection: {
        query: ".tkn_hold div b",
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

const deetlistFogIslandsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistFogIslandsPageHtmlParsingModel
