
export function useGetBannerSources() {
    const bannerSources = [
        {
            url: '/videos/banner-video.mp4',
            type: 'video/mp4'
        },
        {
            url: '/none.webm',
            type: 'video/webm'
        },
        {
            url: '/none.ogv',
            type: 'video/ogg'
        }
    ]
    return bannerSources
}



export function useGetStory() {
    return {
        category: 'Làm đẹp',
        storyName: ' La Beauté Louis Vuitton'
    }
}