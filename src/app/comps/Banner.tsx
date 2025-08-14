import Video from "@/components/Video";
import Link from "next/link";

import styles from './Banner.module.scss'

export default function Banner() {
    const bannerSources = useGetBannerSources()
    const story = useGetStory()

    return <section
        className={`relative -z-10 max-h-[813px] `+ styles['banner']}
    >
        <Video
            sources={bannerSources} autoPlay loop muted playsInline
            className="h-full md:w-full object-cover"
        />
        <div className="z-50 absolute bottom-0 text-white w-full px-[6.4vw] py-6 md:py-10
            flex flex-col justify-between items-center gap-4 text-center">
            <div className="font-thin text-xs">{story.category}</div>
            <div className= "text-2xl md:text-3xl">{story.storyName}</div>
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