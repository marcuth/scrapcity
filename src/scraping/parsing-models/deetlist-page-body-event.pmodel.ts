import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

const deetlistPageBodyEventParsingModel = {
    title: {
        query: ".ei",
        extractor: extractInnerText,
    },
    iconUrl: {
        query: "img",
        extractor: extractAttribute("src"),
    },
    pageUrl: {
        extractor: extractAttribute("href"),
    },
} satisfies ParsingModel

export default deetlistPageBodyEventParsingModel
