import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_URL_API}/movie/popular?api_key=${
                import.meta.env.VITE_API_KEY
            }`,
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setMovies(result.results);
                },
                (err) => {
                    setLoaded(true);
                    setError(err);
                },
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.root}>
                <h1>Home page</h1>
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};
