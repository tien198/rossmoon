import styles from './nav.module.scss'

export default function Footer() {
    return (
        <div
            className={styles['nav__list--services']}
        >
            <div className={styles['service']}>
                <p>Chúng tôi có thể giúp gì cho bạn?</p>
                <p className="font-medium">+84 2838614107</p>
            </div>
        </div>
    )
}