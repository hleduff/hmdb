import { Link, useParams } from 'react-router-dom';

import { Layout, Loader, Message, MovieCarousel } from '../../components';
import { useMovie, useMovieCredits, useRecommendations } from '../../hooks';
import {
    getImage,
    getMovieLength,
    getMovieYear,
    getRatingColor,
} from '../../utils/utils';
import styles from './style.module.css';

export const Movie = () => {
    const { movieId } = useParams();
    const { data, error, loaded } = useMovie(movieId);
    const { data: credits } = useMovieCredits(movieId);
    const { data: recommendations } = useRecommendations(movieId);

    if (error) {
        return (
            <Layout>
                <Message isError={true} text={`Error: ${error.message}`} />
            </Layout>
        );
    } else if (!loaded) {
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
                                src={getImage(data.poster_path)}
                                alt={`Poster for ${data.title}`}
                            />
                        </div>
                        <div className={styles.info}>
                            <div className={styles.header}>
                                <h2 className={styles.title}>{data.title}</h2>
                                <p
                                    className={styles.rating}
                                    style={{
                                        backgroundColor: getRatingColor(
                                            data.vote_average,
                                        ),
                                    }}
                                >
                                    {Math.round(data.vote_average * 10) / 10}
                                </p>
                            </div>
                            <ul className={styles.meta}>
                                <li>{getMovieYear(data.release_date)}</li>
                                <li>{getMovieLength(data.runtime)}</li>
                            </ul>
                            <ul className={styles.genres}>
                                {data.genres.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                            {credits && (
                                <p>
                                    <b>Director:</b>{' '}
                                    {
                                        credits.crew?.find(
                                            (element) => element.job === 'Director',
                                        )?.name
                                    }
                                </p>
                            )}
                            <p>
                                <b>Summary:</b> {data.overview}
                            </p>
                            <p className={styles.originalTitle}>
                                <b>Original title:</b> <i>{data.original_title}</i>
                            </p>
                            <p>
                                <a
                                    href={`https://imdb.com/title/${data.imdb_id}`}
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
                    {recommendations && (
                        <section>
                            <h3>You might also like…</h3>
                            <MovieCarousel movies={recommendations} />
                        </section>
                    )}
                </div>
            </Layout>
        );
    }
};
