import { Link, useParams } from 'react-router-dom';

import { useMovie } from '../../hooks';
import styles from './style.module.css';

export const Movie = () => {
    const { movieId } = useParams();
    const { data, error, loaded } = useMovie(movieId);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.root}>
                <h1>{data.title}</h1>
                <Link to={'/'}>&lt; Back</Link>
            </div>
        );
    }
};
