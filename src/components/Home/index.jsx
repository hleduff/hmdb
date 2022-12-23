import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home = () => (
    <div className={styles.root}>
        <h1>Home page</h1>
        <ul>
            <li>
                <Link to={`movie/1`}>Movie 1</Link>
            </li>
            <li>
                <Link to={`movie/2`}>Movie 2</Link>
            </li>
        </ul>
    </div>
);
