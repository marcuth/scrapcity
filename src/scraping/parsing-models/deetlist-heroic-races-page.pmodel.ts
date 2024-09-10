import { extractInnerText, ParsingModel } from "xcrap/parsing"

import pageMedatadaParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const missionParsingModel = {
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
} satisfies ParsingModel

const nodeParsingModel = {
    missions: {
        query: ".ml",
        model: missionParsingModel,
        isGroup: true,
    },
} satisfies ParsingModel

const lapParsingModel = {
    nodes: {
        query: ".nn",
        model: nodeParsingModel,
        isGroup: true,
    },
} satisfies ParsingModel

const pageBodyParsingModel = {
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
        model: lapParsingModel,
        isGroup: true,
    },
    dragonsDataScript: dragonsDataScriptField,
} satisfies ParsingModel

const deetlistHeroicRacesPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMedatadaParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistHeroicRacesPageParsingModel
