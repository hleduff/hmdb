import { Link, useParams } from 'react-router-dom';

import { Layout, Loader, Message, MovieCarousel } from '../../components';
import { useMovie } from '../../hooks';
import {
    getImage,
    getMovieLength,
    getMovieYear,
    getRatingColor,
} from '../../utils/utils';
import styles from './style.module.css';

export const Movie = () => {
    const { movieId } = useParams();
    const { data: movie, error, loading } = useMovie(movieId);

    if (error) {
        return (
            <Layout>
                <Message isError={true} text={`Error: ${error.message}`} />
            </Layout>
        );
    } else if (loading) {
        return (
            <Layout>
                <Loader />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <div className={styles.root}>
                    <div className={styles.back}>
                        <Link to={'/'}>&times;</Link>
                    </div>
                    <div className={styles.movie}>
                        <div className={styles.poster}>
                            <img
                                className={styles.posterImg}
                                src={getImage(movie.poster_path)}
                                alt={`Poster for ${movie.title}`}
                            />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <h2 className={styles.title}>{movie.title}</h2>
                                <p
                                    className={styles.rating}
                                    style={{
                                        backgroundColor: getRatingColor(
                                            movie.vote_average,
                                        ),
                                    }}
                                >
                                    {Math.round(movie.vote_average * 10) / 10}
                                </p>
                            </div>
                            <ul className={styles.meta}>
                                <li>{getMovieYear(movie.release_date)}</li>
                                <li>{getMovieLength(movie.runtime)}</li>
                            </ul>
                            <ul className={styles.genres}>
                                {movie.genres.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                            {movie?.credits?.crew ? (
                                <p>
                                    <b>Director:</b>{' '}
                                    {
                                        movie.credits.crew.find(
                                            (element) => element.job === 'Director',
                                        )?.name
                                    }
                                </p>
                            ) : null}
                            <p>
                                <b>Summary:</b> {movie.overview}
                            </p>
                            <p className={styles.originalTitle}>
                                <b>Original title:</b>{' '}
                                <i>{movie.original_title || movie.title}</i>
                            </p>
                            <p>
                                <a
                                    href={`https://imdb.com/title/${movie.imdb_id}`}
                                    title="Go to IMDb"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png"
                                        width="32px"
                                        alt="IMDb"
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                    {movie?.recommendations ? (
                        <section>
                            <h3>You might also like…</h3>
                            <MovieCarousel movies={movie.recommendations.results} />
                        </section>
                    ) : null}
                </div>
            </Layout>
        );
    }
};
