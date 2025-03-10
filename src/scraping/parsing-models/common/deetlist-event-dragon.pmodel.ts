import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

const deetlistEventDragonHtmlParsingModel = {
    name: {
        query: ".pan_ic",
        extractor: extractInnerText,
    },
    imagePath: {
        query: ".pan_img",
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
    pagePath: {
        query: "a",
        extractor: extractAttribute("href"),
    },
} satisfies HtmlParsingModel

export default deetlistEventDragonHtmlParsingModel
