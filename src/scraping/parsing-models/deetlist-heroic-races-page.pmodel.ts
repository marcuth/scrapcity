import { extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import pageMedatadaHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const missionHtmlParsingModel = {
    name: {
        query: ".mh",
        extractor: extractInnerText,
    },
    goalPoints: {
        query: ".mz:nth-child(1) .m2",
        extractor: extractInnerText,
    },
    poolSize: {
        query: ".mz:nth-child(2) .m2",
        extractor: extractInnerText,
    },
    collectChance: {
        query: ".mz:nth-child(4) .m2",
        extractor: extractInnerText,
    },
    spawnTimeForOne: {
        query: ".mz:nth-child(3) .m2",
        extractor: extractInnerText,
    },
    spawnTimeForAll: {
        query: ".mz:nth-child(5) .m2",
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const nodeHtmlParsingModel = {
    missions: {
        query: ".ml",
        model: missionHtmlParsingModel,
        isGroup: true,
    },
} satisfies HtmlParsingModel

const lapHtmlParsingModel = {
    nodes: {
        query: ".nn",
        model: nodeHtmlParsingModel,
        isGroup: true,
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    name: {
        query: "h1",
        extractor: (node) => node.textContent.trim(),
    },
    eventDuration: {
        query: ".dur_text",
        extractor: extractInnerText,
    },
    laps: {
        query: ".hl",
        model: lapHtmlParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies HtmlParsingModel

const deetlistHeroicRacesPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistHeroicRacesPageHtmlParsingModel
