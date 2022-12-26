import { Link } from 'react-router-dom';

import { usePopularMovies } from '../../hooks';
import styles from './style.module.css';

export const Home = () => {
    const { data, error, loaded } = usePopularMovies();

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.root}>
                <h1>Home page</h1>
                <ul>
                    {data.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};
