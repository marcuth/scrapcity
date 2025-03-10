export interface GetAllArticles {
    Data: DataItem[]
    Total: number
    AggregateResults: any
    Errors: any
}

export interface DataItem {
    Id: number
    Title: string
    MetaTitle: string
    Url: string
    Thumbnail: string
    ShortDescription: string
}
