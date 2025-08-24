import styles from './nav.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'

type Props = React.DOMAttributes<HTMLButtonElement>

export default function BackButton(props: Props) {
    const { children, ...rest } = props
    return (
        <button
            className={`${styles['item']} ${styles['back-button']}`}
            {...rest}
        >
            <IoIosArrowRoundBack size={'1.5rem'} />
            {children}
        </button>
    )
}