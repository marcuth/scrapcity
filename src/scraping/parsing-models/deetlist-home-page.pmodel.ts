import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"
import { HtmlParsingModelValue } from "xcrap/parsing/html-parser"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"

export const dragonsDataScriptField: HtmlParsingModelValue = {
    query: "#low_menu",
    extractor: (element) => {
        return extractInnerText(element.previousElementSibling)
    },
}

const pageBodyHtmlParsingModel = {
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

const deetlistHomePageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistHomePageHtmlParsingModel
