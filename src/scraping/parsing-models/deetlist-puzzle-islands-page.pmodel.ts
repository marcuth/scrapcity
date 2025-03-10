import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventDragonHtmlParsingModel from "./common/deetlist-event-dragon.pmodel"
import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const missionHtmlParsingModel = {
    title: {
        query: ".miss_con",
        extractor: extractInnerText,
    },
    amount: {
        query: ".moves_h",
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    dragons: {
        query: ".over",
        model: deetlistEventDragonHtmlParsingModel,
        isGroup: true,
    },
    missions1: {
        query: ".m_h[id^='1_']",
        model: missionHtmlParsingModel,
        isGroup: true,
    },
    missions2: {
        query: ".m_h[id^='2_']",
        model: missionHtmlParsingModel,
        isGroup: true,
    },
    missions3: {
        query: ".m_h[id^='3_']",
        model: missionHtmlParsingModel,
        isGroup: true,
    },
    missions4: {
        query: ".m_h[id^='4_']",
        model: missionHtmlParsingModel,
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

const deetlistPuzzleIslandsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistPuzzleIslandsPageHtmlParsingModel
