import { Link } from 'react-router-dom';

import { Layout } from '../../components';
import styles from './style.module.css';

export const NotFound = () => (
    <Layout className={styles.root}>
        <h2>Oops!</h2>
        <p>Page not found.</p>
        <Link to={'/'}>&lt; Back home</Link>
    </Layout>
);
