import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
        <div className="wrapper">
            <div className={styles.content}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/aboutus'>About us</NavLink>
                <NavLink to='/contactus'>Contact us</NavLink>
            </div>
        </div>
    </header>
    )
}

export default Header;