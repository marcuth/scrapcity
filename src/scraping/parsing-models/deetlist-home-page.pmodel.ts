import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

const deetlistHomePageMedatadaParsingModel: ParsingModel = {
    title: {
        query: "title",
        extractor: extractInnerText
    },
    description: {
        query: "meta[name='description']",
        extractor: extractAttribute("content")
    },
    tags: {
        query: "meta[name='keywords']",
        extractor: extractAttribute("content")
    }
}

const deetlistHomePageParsingModel = {
    meetadata: {
        query: "head",
        model: deetlistHomePageMedatadaParsingModel,
    }
} satisfies ParsingModel

export default deetlistHomePageParsingModel