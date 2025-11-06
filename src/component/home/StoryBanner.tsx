import Video, { VideoSource } from "@/component/Video";
import Link from "next/link";

import styles from './StoryBanner.module.scss'

export default async function StoryBanner() {
    const bannerSources = await getStoryBannerSources()
    const story = await getStory()

    return <section
        className={`relative -z-10 max-h-[813px] ` + styles['banner']}
    >
        <Video
            sources={bannerSources} autoPlay loop muted playsInline
            className="h-full md:w-full object-cover"
        />
        <div className="z-50 absolute bottom-0 text-white w-full px-[6.4vw] py-6 md:py-10
            flex flex-col justify-between items-center gap-4 text-center">
            <div className="font-thin text-xs">{story.category}</div>
            <div className="text-2xl md:text-3xl">{story.name}</div>
            <Link href={story.url} className='border-b border-white'>Đăng ký nhận thông báo</Link>
        </div>
    </section>
}



async function getStoryBannerSources() {
    const bannerSources: VideoSource[] = [
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



async function getStory() {
    return {
        category: 'Làm đẹp',
        name: ' La Beauté Louis Vuitton',
        url: 'none-url'
    }
}