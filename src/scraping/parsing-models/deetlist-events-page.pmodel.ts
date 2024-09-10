import { extractInnerText, ParsingModel } from "xcrap/parsing"

import eventPageBodyEventParsingModel from "./deetlist-page-body-event.pmodel"
import pageMetadataParsingModel from "./page-metadata.pmodel"

const deetlistEventsPageBodyParsingModel = {
    heading: {
        query: "h1",
        extractor: extractInnerText
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
} satisfies ParsingModel

const deetlistEventsPageParsinModel = {
    metadata: {
        query: "head",
        model: pageMetadataParsingModel,
    },
    body: {
        query: "body",
        model: deetlistEventsPageBodyParsingModel,
    }
} satisfies ParsingModel

export default deetlistEventsPageParsinModel
