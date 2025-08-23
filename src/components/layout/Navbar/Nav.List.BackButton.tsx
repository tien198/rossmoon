import type { PropsWithChildren } from 'react'
import styles from './nav.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'

type Props = {
    onClick: () => void
} & PropsWithChildren

export default function BackButton(props: Props) {
    return (
        <button
            className={`${styles['item']} ${styles['back-button']}`}
            onClick={props.onClick}
        >
            <IoIosArrowRoundBack size={'1.5rem'} />
            {props.children}
        </button>
    )
}