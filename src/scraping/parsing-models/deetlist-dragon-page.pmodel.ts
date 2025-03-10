import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

import deetlistEventHtmlParsingModel from "./common/deetlist-event.pmodel"
import pageMetadataHtmlParsingModel from "./common/page-metadata.pmodel"
import { dragonsDataScriptField } from "./deetlist-home-page.pmodel"

const attackHtmlParsingModel = {
    iconClassName: {
        query: ".t_attck",
        extractor: extractAttribute("class"),
    },
    nameAndPowerAndElementTypeAndTrainingTime: {
        query: ".att_desc",
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const detailsRowParsignModel = {
    key: {
        query: ".dh",
        extractor: extractInnerText,
    },
    value: {
        extractor: extractInnerText,
    },
} satisfies HtmlParsingModel

const dragonHtmlParsingModel = {
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
        model: attackHtmlParsingModel,
        isGroup: true,
    },
    trainableAttacks: {
        query: ".b_split+ .b_split .att_hold",
        model: attackHtmlParsingModel,
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
    },
} satisfies HtmlParsingModel

const pageBodyHtmlParsingModel = {
    dragon: {
        query: "#body_content",
        model: dragonHtmlParsingModel,
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

const deetlistDragonPageHtmlParsingModel = {
    metadata: {
        query: "head",
        model: pageMetadataHtmlParsingModel,
    },
    body: {
        query: "body",
        model: pageBodyHtmlParsingModel,
    },
} satisfies HtmlParsingModel

export default deetlistDragonPageHtmlParsingModel
