import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={navData => navData.isActive ? styles.active : styles.item} to="/users">Users</NavLink>
            </div>
            <div>
                <a className={styles.item} href="/">News</a>
            </div>
            <div>
                <a className={styles.item} href="/">Music</a>
            </div>
            <div>
                <a className={styles.item} href="/">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;