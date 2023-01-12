import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <header>
        <div className="wrapper">
            <div className={styles.content}>
                2023 Github: @NikitaPas
            </div>
        </div>
    </header>
    )
}

export default Footer;