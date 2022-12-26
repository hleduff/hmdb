import { useRouteError } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import styles from './style.module.css';

export const Error = () => {
    const error = useRouteError();

    return (
        <Layout className={styles.root}>
            <h2>Oops!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}.</i>
            </p>
        </Layout>
    );
};
