import { ReactNode } from "react"

export interface Props {
    className: string
    children: ReactNode
}

export interface SVGProps extends Props {
    width: number
    height: number
    fill: string
}