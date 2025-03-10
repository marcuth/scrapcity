import { extractAttribute, extractInnerText, HtmlParsingModel } from "xcrap/parsing"

const deetlistEventHtmlParsingModel = {
    title: {
        query: ".ei",
        extractor: extractInnerText,
    },
    iconPath: {
        query: "img",
        extractor: extractAttribute("src"),
    },
    pagePath: {
        extractor: extractAttribute("href"),
    },
} satisfies HtmlParsingModel

export default deetlistEventHtmlParsingModel
