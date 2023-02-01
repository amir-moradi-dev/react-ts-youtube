export type YoutubeResponseType = {
    etag: string
    items: {
        etag: string
        id: {kind: string, videoId: string}
        kind: string
        snippet: {
            channelId: string
            channelTitle: string
            description: string
            liveBroadcastContent: string
            publishTime: Date
            publishedAt: Date
            thumbnails: {
                default: {
                    height: number
                    url: string
                    width: number
                },
                medium: {
                    height: number
                    url: string
                    width: number
                },
                high: {
                    height: number
                    url: string
                    width: number
                }
            }
            title: string
        }
    }[]
    kind: string
    nextPageToken: string
    pageInfo: {totalResults: number, resultsPerPage: number }
    regionCode: string
}

export type YoutubeVideoItemsType = {
    etag: string
    id: {kind: string, videoId: string}
    kind: string
    snippet: {
        channelId: string
        channelTitle: string
        description: string
        liveBroadcastContent: string
        publishTime: Date
        publishedAt: Date
        thumbnails: {
            default: {
                height: number
                url: string
                width: number
            },
            medium: {
                height: number
                url: string
                width: number
            },
            high: {
                height: number
                url: string
                width: number
            }
        }
        title: string
    }

}

export type VideosListType = YoutubeVideoItemsType[]|null
