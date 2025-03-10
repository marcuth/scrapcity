import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const dragonHtmlParsingModel = {
    name: {
        query: ".nnam",
        extractor: extractInnerText,
    },
    rarityClassName: {
        query: ".img_rar",
        extractor: extractAttribute("class"),
    },
    elementClassNames: {
        query: ".typ_i",
        extractor: extractAttribute("class"),
        fieldType: "multiple",
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    dragons: {
        query: ".dlist",
        model: dragonHtmlParsingModel,
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

const deetlistAllHeroicDragonsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistAllHeroicDragonsPageHtmlParsingModel
