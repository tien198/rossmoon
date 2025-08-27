import Video from "@/components/Video";
import Link from "next/link";

import styles from './StoryBanner.module.scss'
import { useGetStoryBannerSources, useGetStory } from "../../hooks/storyBannerHooks";

export default function StoryBanner() {
    const bannerSources = useGetStoryBannerSources()
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






