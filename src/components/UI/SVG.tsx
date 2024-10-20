import { SVGProps } from "../../models/Props"

function SVG(props: SVGProps) {
    const { className,
        width = 24,
        height = 24,
        fill = '#000',
        children
    } = props
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {children}
        </svg>

    )
}

export default SVG