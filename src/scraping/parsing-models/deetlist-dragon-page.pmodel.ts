import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

import deetlistEventParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const attackParsingModel = {
    iconClassName: {
        query: ".t_attck",
        extractor: extractAttribute("class"),
    },
    nameAndPowerAndElementTypeAndTrainingTime: {
        query: ".att_desc",
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const detailsRowParsignModel = {
    key: {
        query: ".dh",
        extractor: extractInnerText,
    },
    value: {
        extractor: extractInnerText,
    },
} satisfies ParsingModel

const dragonParsingModel = {
    name: {
        query: "h1",
        extractor: extractInnerText,
    },
    bio: {
        query: "#self_bio",
        extractor: extractInnerText,
    },
    elementClassNames: {
        query: ".attrib .typ_i",
        extractor: extractAttribute("class"),
        fieldType: "multiple",
    },
    imagePath: {
        query: ".drg_img",
        extractor: extractAttribute("src"),
    },
    rarityClassName: {
        query: ".img_rar",
        extractor: extractAttribute("class"),
    },
    detailRows: {
        query: ".dttd",
        model: detailsRowParsignModel,
        isGroup: true,
    },
    basicAttacks: {
        query: ".b_split .att_hold:nth-child(-n+4)",
        model: attackParsingModel,
        isGroup: true,
    },
    trainableAttacks: {
        query: ".b_split+ .b_split .att_hold",
        model: attackParsingModel,
        isGroup: true,
    },
    weaknessElementClassNames: {
        query: ".spc2~ .b_split+ .b_split .typ_i",
        extractor: extractAttribute("class"),
        fieldType: "multiple",
    },
    strongElementClassNames: {
        query: ".spc2+ .b_split .typ_i",
        extractor: extractAttribute("class"),
        fieldType: "multiple",
    },
    goldEarningsInfo: {
        query: ".norm_h+ p",
        extractor: extractInnerText,
    }
} satisfies ParsingModel

const pageBodyParsingModel = {
    dragon: {
        query: "#body_content",
        model: dragonParsingModel,
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

const deetlistDragonPageParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyParsingModel,
    },
} satisfies ParsingModel

export default deetlistDragonPageParsingModel
