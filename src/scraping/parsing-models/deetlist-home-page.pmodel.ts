import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistPageBodyEventParsingModel from "./deetlist-page-body-event.pmodel"
import pageMedatadaParsingModel from "./page-metadata.pmodel"

const deetlistHomePageBodyParsingModel = {
    currentEvents: {
        query: "h3.see_ev.ev_evs ~ a.eata",
        model: deetlistPageBodyEventParsingModel,
        isGroup: true,
    },
    upcomingEvents: {
        query: "h3.see_ev.ev_upc ~ a.eata",
        model: deetlistPageBodyEventParsingModel,
        isGroup: true,
    },
} satisfies ParsingModel

const deetlistHomePageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: deetlistHomePageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistHomePageParsingModel
