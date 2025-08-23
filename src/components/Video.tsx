import { MediaHTMLAttributes } from "react"

type Props = {
    sources: {
        url: string
        type?: string
    }[]
} & MediaHTMLAttributes<HTMLVideoElement>

export default function Video(props: Props) {
    // rest - spread operator
    const { sources, ...rest } = props
    return <video className="h-full md:w-full object-cover" {...rest} >
        {sources.map(i =>
            <source key={i.url} src={i.url} type={i.type} />
        )}
        <p>Trình duyệt không hỗ trợ !</p>
    </video>
}