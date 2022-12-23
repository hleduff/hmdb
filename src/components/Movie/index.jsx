import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Movie = () => (
    <div className={styles.root}>
        <h1>Movie page</h1>
        <Link to={'/'}>&lt; Back</Link>
    </div>
);
