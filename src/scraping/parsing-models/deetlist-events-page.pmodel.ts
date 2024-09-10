import { extractInnerText, ParsingModel } from "xcrap/parsing"

import eventPageBodyEventParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const pageBodyParsingModel = {
    heading: {
        query: "h1",
        extractor: extractInnerText,
    },
    currentEvents: {
        query: "h3.see_ev.ev_evs ~ a.eata",
        model: eventPageBodyEventParsingModel,
        isGroup: true,
    },
    upcomingEvents: {
        query: "h3.see_ev.ev_upc ~ a.eata",
        model: eventPageBodyEventParsingModel,
        isGroup: true,
    },
    pastEvents: {
        query: "h3.see_ev.ev_past ~ a.eata",
        model: eventPageBodyEventParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies ParsingModel

const deetlistEventsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistEventsPageParsingModel
