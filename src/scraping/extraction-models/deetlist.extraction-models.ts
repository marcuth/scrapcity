import {
    css,
    extract,
    fromPreviousElementSibling,
    HtmlExtractionModel,
    HtmlExtractionModelShapeBaseValue,
} from "@xcrap/extractor"

// ============================================================================
// 1. MODELOS COMPARTILHADOS (COMMON)
// ============================================================================

export const dragonsDataScriptField: HtmlExtractionModelShapeBaseValue = {
    query: css("#low_menu"),
    extractor: fromPreviousElementSibling(extract("innerText")),
    default: null,
}

export const pageMetadataExtractionModel = new HtmlExtractionModel({
    title: {
        query: css("title"),
        extractor: extract("innerText"),
        default: null,
    },
    description: {
        query: css("meta[name='description']"),
        extractor: extract("content", true),
        default: null,
    },
    tags: {
        query: css("meta[name='keywords']"),
        extractor: extract("content", true),
        default: null,
    },
    author: {
        query: css("meta[name='author']"),
        extractor: extract("content", true),
        default: null,
    },
    ogType: {
        query: css("meta[property='og:type']"),
        extractor: extract("content", true),
        default: null,
    },
    ogTitle: {
        query: css("meta[property='og:title']"),
        extractor: extract("content", true),
        default: null,
    },
    ogDescription: {
        query: css("meta[property='og:description']"),
        extractor: extract("content", true),
        default: null,
    },
    ogImage: {
        query: css("meta[property='og:image']"),
        extractor: extract("content", true),
        default: null,
    },
    favIcon: {
        query: css("link[rel='shortcut icon']"),
        extractor: extract("href", true),
        default: null,
    },
})

export const deetlistEventExtractionModel = new HtmlExtractionModel({
    title: {
        query: css(".ei"),
        extractor: extract("innerText"),
    },
    iconPath: {
        query: css("img"),
        extractor: extract("src", true),
    },
    pagePath: {
        extractor: extract("href", true),
    },
})

export const deetlistEventDragonExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".pan_ic"),
        extractor: extract("innerText"),
    },
    imagePath: {
        query: css(".pan_img"),
        extractor: extract("src", true),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    elementClassNames: {
        query: css(".typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    pagePath: {
        query: css("a"),
        extractor: extract("href", true),
    },
})

// ============================================================================
// 2. HOME PAGE
// ============================================================================

const deetlistHomePageBodyExtractionModel = new HtmlExtractionModel({
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistHomePageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistHomePageBodyExtractionModel,
    },
})

// ============================================================================
// 3. DRAGONS MODELS
// ============================================================================

const dragonCardExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".drag"),
        extractor: extract("innerText"),
    },
    pagePath: {
        extractor: extract("href", true),
    },
})

const deetlistAllDragonsPageBodyExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".drag_link:has(.drag)"),
        model: dragonCardExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistAllDragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistAllDragonsPageBodyExtractionModel,
    },
})

const newestDragonCardExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".rn"),
        extractor: extract("innerText"),
    },
    imagePath: {
        query: css(".newi"),
        extractor: extract("src", true),
    },
    pagePath: {
        extractor: extract("href", true),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    releaseTime: {
        query: css(".rt"),
        extractor: extract("innerText"),
    },
})

const deetlistNewestDragonsPageBodyExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".drag_link:has(.drag)"),
        model: newestDragonCardExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistNewestDragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistNewestDragonsPageBodyExtractionModel,
    },
})

const standardListDragonExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".nnam"),
        extractor: extract("innerText"),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    elementClassNames: {
        query: css(".typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
})

const deetlistAllHeroicDragonsPageBodyExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".dlist"),
        model: standardListDragonExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistAllHeroicDragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistAllHeroicDragonsPageBodyExtractionModel,
    },
})

const heroicDragonByAttackCardExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".nnam"),
        extractor: extract("innerText"),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    elementClassNames: {
        query: css(".typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    attackScoreAndRank: {
        query: css(".attk"),
        extractor: extract("innerText"),
    },
})

const deetlistHeroicDragonsByAttackBodyExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".dlist"),
        model: heroicDragonByAttackCardExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistHeroicDragonsByAttackExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistHeroicDragonsByAttackBodyExtractionModel,
    },
})

const breedableDragonCategoryExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".dlist"),
        model: standardListDragonExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistBreedableCategory5DragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: breedableDragonCategoryExtractionModel,
    },
})

export const deetlistBreedableCategory9DragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: breedableDragonCategoryExtractionModel,
    },
})

const legendaryDragonCardExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".smo"),
        extractor: extract("innerText"),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    elementClassNames: {
        query: css(".typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
})

const breedableLegendaryBodyExtractionModel = new HtmlExtractionModel({
    dragons: {
        query: css(".over"),
        model: legendaryDragonCardExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistBreedableLegendaryDragonsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: breedableLegendaryBodyExtractionModel,
    },
})

// Single Dragon Detail Page
const attackExtractionModel = new HtmlExtractionModel({
    iconClassName: {
        query: css(".t_attck"),
        extractor: extract("class", true),
    },
    nameAndPowerAndElementTypeAndTrainingTime: {
        query: css(".att_desc"),
        extractor: extract("innerText"),
    },
})

const detailsRowExtractionModel = new HtmlExtractionModel({
    key: {
        query: css(".dh"),
        extractor: extract("innerText"),
    },
    value: {
        extractor: extract("innerText"),
    },
})

const singleDragonExtractionModel = new HtmlExtractionModel({
    name: {
        query: css("h1"),
        extractor: extract("innerText"),
    },
    bio: {
        query: css("#self_bio"),
        extractor: extract("innerText"),
    },
    elementClassNames: {
        query: css(".attrib .typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    imagePath: {
        query: css(".drg_img"),
        extractor: extract("src", true),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    detailRows: {
        query: css(".dttd"),
        model: detailsRowExtractionModel,
        multiple: true,
    },
    basicAttacks: {
        query: css(".b_split .att_hold:nth-child(-n+4)"),
        model: attackExtractionModel,
        multiple: true,
    },
    trainableAttacks: {
        query: css(".b_split+ .b_split .att_hold"),
        model: attackExtractionModel,
        multiple: true,
    },
    weaknessElementClassNames: {
        query: css(".spc2~ .b_split+ .b_split .typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    strongElementClassNames: {
        query: css(".spc2+ .b_split .typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    goldEarningsInfo: {
        query: css(".norm_h+ p"),
        extractor: extract("innerText"),
    },
})

const deetlistDragonPageBodyExtractionModel = new HtmlExtractionModel({
    dragon: {
        query: css("#body_content"),
        model: singleDragonExtractionModel,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistDragonPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistDragonPageBodyExtractionModel,
    },
})

// ============================================================================
// 4. EVENTS MODELS
// ============================================================================

const deetlistEventsPageBodyExtractionModel = new HtmlExtractionModel({
    heading: {
        query: css("h1"),
        extractor: extract("innerText"),
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    pastEvents: {
        query: css("h3.see_ev.ev_past ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistEventsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: deetlistEventsPageBodyExtractionModel,
    },
})

// Island Events Common Base
const islandEventBodyFactory = (query = ".over") =>
    new HtmlExtractionModel({
        name: {
            query: css("h1"),
            extractor: extract("innerText"),
        },
        eventDuration: {
            query: css(".dur_text"),
            extractor: extract("innerText"),
        },
        textAboutCollectingPoints: {
            query: css(".tkn_text"),
            extractor: extract("innerText"),
        },
        totalPointsPerCollection: {
            query: css(".tkn_hold div b"),
            extractor: extract("innerText"),
        },
        dragons: {
            query: css(query),
            model: deetlistEventDragonExtractionModel,
            multiple: true,
        },
        currentEvents: {
            query: css("h3.see_ev.ev_evs ~ a.eata"),
            model: deetlistEventExtractionModel,
            multiple: true,
        },
        upcomingEvents: {
            query: css("h3.see_ev.ev_upc ~ a.eata"),
            model: deetlistEventExtractionModel,
            multiple: true,
        },
        dragonsDataScript: dragonsDataScriptField,
    })

export const deetlistFogIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: islandEventBodyFactory(".over"),
    },
})

export const deetlistGridIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: islandEventBodyFactory(".over"),
    },
})

export const deetlistTowerIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: islandEventBodyFactory(".over"),
    },
})

const runnerIslandsBodyExtractionModel = new HtmlExtractionModel({
    name: {
        query: css("h1"),
        extractor: extract("innerText"),
    },
    eventDuration: {
        query: css(".dur_text"),
        extractor: extract("innerText"),
    },
    dragons: {
        query: css(".over"),
        model: deetlistEventDragonExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistRunnerIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: runnerIslandsBodyExtractionModel,
    },
})

// Heroic Race Event
const missionExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".mh"),
        extractor: extract("innerText"),
    },
    goalPoints: {
        query: css(".mz:nth-child(1) .m2"),
        extractor: extract("innerText"),
    },
    poolSize: {
        query: css(".mz:nth-child(2) .m2"),
        extractor: extract("innerText"),
    },
    collectChance: {
        query: css(".mz:nth-child(4) .m2"),
        extractor: extract("innerText"),
    },
    spawnTimeForOne: {
        query: css(".mz:nth-child(3) .m2"),
        extractor: extract("innerText"),
    },
    spawnTimeForAll: {
        query: css(".mz:nth-child(5) .m2"),
        extractor: extract("innerText"),
    },
})

const nodeExtractionModel = new HtmlExtractionModel({
    missions: {
        query: css(".ml"),
        model: missionExtractionModel,
        multiple: true,
    },
})

const lapExtractionModel = new HtmlExtractionModel({
    nodes: {
        query: css(".nn"),
        model: nodeExtractionModel,
        multiple: true,
    },
})

const heroicRacesBodyExtractionModel = new HtmlExtractionModel({
    name: {
        query: css("h1"),
        extractor: (node) => node.textContent?.trim(),
    },
    eventDuration: {
        query: css(".dur_text"),
        extractor: extract("innerText"),
    },
    laps: {
        query: css(".hl"),
        model: lapExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistHeroicRacesPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: heroicRacesBodyExtractionModel,
    },
})

// Maze Island Event
const mazeNodeExtractionModel = new HtmlExtractionModel({
    title: {
        query: css(".mi_con"),
        extractor: extract("innerText"),
    },
    accumulatedCost: {
        query: css(".mii_tota b"),
        extractor: extract("innerText"),
    },
})

const mazePathDragonExtractionModel = new HtmlExtractionModel({
    imagePath: {
        query: css(".mi_i_hld"),
        extractor: extract("src", true),
    },
    rarityClassName: {
        query: css(".img_rar"),
        extractor: extract("class", true),
    },
    elementClassNames: {
        query: css(".typ_i"),
        extractor: extract("class", true),
        multiple: true,
    },
    category: {
        query: css("p[style^='margin-left: 110px; width: 100px;']"),
        extractor: extract("innerText"),
    },
    totalCost: {
        extractor: extract("innerText"),
    },
    pagePath: {
        query: css("a"),
        extractor: extract("href", true),
    },
})

const mazePathExtractionModel = new HtmlExtractionModel({
    dragonName: {
        query: css("h3"),
        extractor: extract("innerText"),
    },
    dragon: {
        query: css(".ev_ds"),
        model: mazePathDragonExtractionModel,
    },
    nodes: {
        query: css(".miihold"),
        model: mazeNodeExtractionModel,
        multiple: true,
    },
    nodeCosts: {
        query: css(".mii_cost"),
        extractor: extract("innerText"),
        multiple: true,
    },
})

const dragonSummaryInfoExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".img_rhld+ div div:nth-child(1)"),
        extractor: extract("innerText"),
    },
    pathCost: {
        query: css(".img_rhld+ div div:nth-child(2)"),
        extractor: extract("innerText"),
    },
})

const mazeIslandBodyExtractionModel = new HtmlExtractionModel({
    name: {
        query: css("h1"),
        extractor: extract("innerText"),
    },
    dragonSummaryInfos: {
        query: css(".da"),
        model: dragonSummaryInfoExtractionModel,
        multiple: true,
    },
    paths: {
        query: css(".ee"),
        model: mazePathExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistMazeIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: mazeIslandBodyExtractionModel,
    },
})

// Puzzle Island Event
const puzzleMissionExtractionModel = new HtmlExtractionModel({
    title: {
        query: css(".miss_con"),
        extractor: extract("innerText"),
    },
    amount: {
        query: css(".moves_h"),
        extractor: extract("innerText"),
    },
})

const puzzleIslandBodyExtractionModel = new HtmlExtractionModel({
    name: {
        query: css("h1"),
        extractor: extract("innerText"),
    },
    dragons: {
        query: css(".over"),
        model: deetlistEventDragonExtractionModel,
        multiple: true,
    },
    missions1: {
        query: css(".m_h[id^='1_']"),
        model: puzzleMissionExtractionModel,
        multiple: true,
    },
    missions2: {
        query: css(".m_h[id^='2_']"),
        model: puzzleMissionExtractionModel,
        multiple: true,
    },
    missions3: {
        query: css(".m_h[id^='3_']"),
        model: puzzleMissionExtractionModel,
        multiple: true,
    },
    missions4: {
        query: css(".m_h[id^='4_']"),
        model: puzzleMissionExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistPuzzleIslandsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: puzzleIslandBodyExtractionModel,
    },
})

// ============================================================================
// 5. ELEMENTS MODELS
// ============================================================================

const elementItemExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".emel"),
        extractor: extract("innerText"),
    },
    icon: {
        query: css("img"),
        extractor: extract("src", true),
    },
    pagePath: {
        extractor: extract("href", true),
    },
})

const elementsBodyExtractionModel = new HtmlExtractionModel({
    elements: {
        query: css("a:has(.emel)"),
        model: elementItemExtractionModel,
        multiple: true,
    },
    currentEvents: {
        query: css("h3.see_ev.ev_evs ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    upcomingEvents: {
        query: css("h3.see_ev.ev_upc ~ a.eata"),
        model: deetlistEventExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistElementsPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: elementsBodyExtractionModel,
    },
})

const elementTokenItemExtractionModel = new HtmlExtractionModel({
    name: {
        query: css(".emel"),
        extractor: extract("innerText"),
    },
    icon: {
        query: css(".tok"),
        extractor: extract("src", true),
    },
    pagePath: {
        extractor: extract("href", true),
    },
})

const elementTokensBodyExtractionModel = new HtmlExtractionModel({
    elementTokens: {
        query: css("a:has(.emel)"),
        model: elementTokenItemExtractionModel,
        multiple: true,
    },
    dragonsDataScript: dragonsDataScriptField,
})

export const deetlistElementTokensPageExtractionModel = new HtmlExtractionModel({
    metadata: {
        query: css("head"),
        model: pageMetadataExtractionModel,
    },
    body: {
        query: css("body"),
        model: elementTokensBodyExtractionModel,
    },
})
