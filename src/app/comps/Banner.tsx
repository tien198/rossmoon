import Video from "@/components/Video";


export default function Banner() {
    const bannerSources = useGetBannerSources()

    return <section className="relative -z-10 h-[500px] md:h-[850px]">
        <Video
            sources={bannerSources} autoPlay loop muted
            className="h-full md:w-full object-cover"
        />
        <div className="z-10 absolute bottom-0 text-white">
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt perferendis impedit harum explicabo, sint excepturi odit, magni repudiandae quasi aut ad quod temporibus accusantium hic amet laborum maxime nesciunt doloremque!</div>
        </div>
    </section>
}







function useGetBannerSources() {
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