import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const nodeParsingModel = {
    title: {
        query: ".mi_con",
        extractor: extractInnerText,
    },
    accumulatedCost: {
        query: ".mii_tota b",
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const pathDragonParsingModel = {
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
} satisfies ParsingModel

const pathParsingModel = {
    dragonName: {
        query: "h3",
        extractor: extractInnerText,
    },
    dragon: {
        query: ".ev_ds",
        model: pathDragonParsingModel,
    },
    nodes: {
        query: ".miihold",
        model: nodeParsingModel,
        isGroup: true,
    },
    nodeCosts: {
        query: ".mii_cost",
        extractor: extractInnerText,
        fieldType: "multiple",
    },
} satisfies ParsingModel

const dragonSummaryInfoParsingModel = {
    name: {
        query: ".img_rhld+ div div:nth-child(1)",
        extractor: extractInnerText,
    },
    pathCost: {
        query: ".img_rhld+ div div:nth-child(2)",
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    dragonSummaryInfos: {
        query: ".da",
        model: dragonSummaryInfoParsingModel,
        isGroup: true,
    },
    paths: {
        query: ".ee",
        model: pathParsingModel,
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

const deetlistMazeIslandsPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistMazeIslandsPageParsingModel
