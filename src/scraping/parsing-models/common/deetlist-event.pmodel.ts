import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

const deetlistEventParsingModel = {
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
} satisfies ParsingModel

export default deetlistEventParsingModel
