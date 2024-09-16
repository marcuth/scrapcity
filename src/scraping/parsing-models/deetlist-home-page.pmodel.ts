import { extractInnerText, ParsingModel } from "xcrap/parsing"
import { ParsingModelValue } from "xcrap/parsing/page.parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaParsingModel from "./common/page-metadata.pmodel"

export const dragonsDataScriptField: ParsingModelValue = {
    query: "#low_menu",
    extractor: (element) => {
        return extractInnerText(element.previousElementSibling)
    },
}

const pageBodyParsingModel = {
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

const deetlistHomePageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistHomePageParsingModel
