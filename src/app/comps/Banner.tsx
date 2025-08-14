import Video from "@/components/Video";
import Link from "next/link";


export default function Banner() {
    const bannerSources = useGetBannerSources()
    const story = useGetStory()

    return <section className="relative -z-10 h-[500px] md:h-[850px]">
        <Video
            sources={bannerSources} autoPlay loop muted playsInline
            className="h-full md:w-full object-cover"
        />
        <div className="z-10 absolute -translate-1/2 left-1/2 bottom-0 text-white
            flex flex-col justify-between items-center gap-5 text-center">
                <div className="font-extralight text-sm md:text-base">{story.category}</div>
                <div className="text-2xl md:text-5xl">{story.storyName}</div>
                <Link href='/' className='border-b border-white'>Đăng ký nhận thông báo</Link>
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


function useGetStory() {
    return {
        category: 'Làm đẹp',
        storyName: ' La Beauté Louis Vuitton'
    }
}