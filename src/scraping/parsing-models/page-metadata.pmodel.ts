import { extractAttribute, extractInnerText, ParsingModel } from "xcrap/parsing"

const pageMedatadaParsingModel = {
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
    },
    author: {
        query: "meta[name='author']",
        extractor: extractAttribute("content")
    },
    ogType: {
        query: "meta[property='og:type']",
        extractor: extractAttribute("content")
    },
    ogTitle: {
        query: "meta[property='og:title']",
        extractor: extractAttribute("content")
    },
    ogDescription: {
        query: "meta[property='og:description']",
        extractor: extractAttribute("content")
    },
    ogImage: {
        query: "meta[property='og:image']",
        extractor: extractAttribute("content")
    },
    favIcon: {
        query: "link[rel='shortcut icon']",
        extractor: extractAttribute("href")
    }
} satisfies ParsingModel

export default pageMedatadaParsingModel