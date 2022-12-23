import { useRouteError } from 'react-router-dom';

import styles from './style.module.css';

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={styles.root}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};
