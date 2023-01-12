import styles from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <div className={styles.content}>
                    Smartphones shop
                </div>
            </div>
        </header>
    )
}

export default Header;