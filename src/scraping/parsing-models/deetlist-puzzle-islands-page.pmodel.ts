import { extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventDragonParsingModel from "./common/deetlist-event-dragon.pmodel"
import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const missionParsingModel = {
    title: {
        query: ".miss_con",
        extractor: extractInnerText,
    },
    amount: {
        query: ".moves_h",
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    dragons: {
        query: ".over",
        model: deetlistEventDragonParsingModel,
        isGroup: true,
    },
    missions1: {
        query: ".m_h[id^='1_']",
        model: missionParsingModel,
        isGroup: true,
    },
    missions2: {
        query: ".m_h[id^='2_']",
        model: missionParsingModel,
        isGroup: true,
    },
    missions3: {
        query: ".m_h[id^='3_']",
        model: missionParsingModel,
        isGroup: true,
    },
    missions4: {
        query: ".m_h[id^='4_']",
        model: missionParsingModel,
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

const deetlistPuzzleIslandsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistPuzzleIslandsPageParsingModel
