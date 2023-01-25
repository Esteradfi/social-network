import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt="logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/250px-Flag_of_Japan.svg.png"/>
        </header>
    );
}

export default Header;