import { extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventDragonParsingModel from "./common/deetlist-event-dragon.pmodel"
import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const pageBodyParsingModel = {
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
        model: deetlistEventDragonParsingModel,
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

const deetlistTowerIslandsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistTowerIslandsPageParsingModel
