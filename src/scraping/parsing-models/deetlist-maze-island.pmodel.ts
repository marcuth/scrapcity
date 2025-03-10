import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const nodeHtmlParsingModel = {
    title: {
        query: ".mi_con",
        extractor: extractInnerText,
    },
    accumulatedCost: {
        query: ".mii_tota b",
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const pathDragonHtmlParsingModel = {
    imagePath: {
        query: ".mi_i_hld",
        extractor: extractAttribute("src"),
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
    category: {
        query: "p[style^='margin-left: 110px; width: 100px;']",
        extractor: extractInnerText,
    },
    totalCost: {
        extractor: extractInnerText,
    },
    pagePath: {
        query: "a",
        extractor: extractAttribute("href"),
    },
} satisfies HtmlParsingModel

const pathHtmlParsingModel = {
    dragonName: {
        query: "h3",
        extractor: extractInnerText,
    },
    dragon: {
        query: ".ev_ds",
        model: pathDragonHtmlParsingModel,
    },
    nodes: {
        query: ".miihold",
        model: nodeHtmlParsingModel,
        isGroup: true,
    },
    nodeCosts: {
        query: ".mii_cost",
        extractor: extractInnerText,
        fieldType: "multiple",
    },
} satisfies HtmlParsingModel

const dragonSummaryInfoHtmlParsingModel = {
    name: {
        query: ".img_rhld+ div div:nth-child(1)",
        extractor: extractInnerText,
    },
    pathCost: {
        query: ".img_rhld+ div div:nth-child(2)",
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    dragonSummaryInfos: {
        query: ".da",
        model: dragonSummaryInfoHtmlParsingModel,
        isGroup: true,
    },
    paths: {
        query: ".ee",
        model: pathHtmlParsingModel,
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

const deetlistMazeIslandsPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistMazeIslandsPageHtmlParsingModel
