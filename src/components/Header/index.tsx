import { Link } from 'react-router-dom';

import { SelectCountry } from '../../features/locale/SelectCountry';

import styles from './style.module.css';

export const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            <Link to="/popular">HMD<span className={styles.highlight}>b</span></Link>
        </h1>
        <SelectCountry />
    </header>
);
