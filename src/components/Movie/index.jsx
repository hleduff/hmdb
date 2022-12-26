import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './style.module.css';

export const Movie = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_URL_API}/movie/${movieId}?api_key=${
                import.meta.env.VITE_API_KEY
            }`,
        )
            .then((res) => res.json())
            .then(
                (response) => {
                    setLoaded(true);
                    setMovie(response);
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
                <h1>{movie.title}</h1>
                <Link to={'/'}>&lt; Back</Link>
            </div>
        );
    }
};
