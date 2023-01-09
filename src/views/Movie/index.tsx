import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';

import { useAppSelector } from '../../app/store';
import { Layout, Loader, MovieCarousel } from '../../components';
import {
    useGetMovieCreditsQuery,
    useGetMovieQuery,
    useGetRecommendationsQuery,
    useGetWatchProvidersQuery,
} from '../../features/api/apiSlice';
import {
    getImage,
    getMovieLength,
    getMovieYear,
    getRatingColor,
} from '../../utils';

import styles from './style.module.css';

export const Movie = () => {
    const { movieId } = useParams();
    const locale = useAppSelector((state) => state.locale.locale);

    const queryParams = {
        id: movieId ? movieId : '',
        locale: locale,
    };
    const skip = { skip: !movieId };
    const {
        data: movie,
        isFetching,
        isSuccess,
    } = useGetMovieQuery(queryParams, skip);
    const { data: credits } = useGetMovieCreditsQuery(queryParams, skip);
    const { data: watchProviders } = useGetWatchProvidersQuery(queryParams, skip);
    const { data: recommendations } = useGetRecommendationsQuery(queryParams, skip);

    const tmdbLink = watchProviders?.results ? watchProviders?.results[locale as unknown as number]?.link : '';

    let content;

    if (isFetching) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <>
                <Helmet>
                    <title>{movie.title} - HMDb</title>
                </Helmet>
                <div className={styles.root}>
                    <div className={styles.back}>
                        <Link to={'/'} title="Go back">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 -6.5 38 38"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="nonzero"
                                    d="M11.188.58.675 11.004l-.088.082c-.352.349-.557.809-.587 1.352l.002.183c.025.43.19.842.514 1.21l.123.127L11.188 24.42c.78.773 2.041.773 2.822 0a1.985 1.985 0 0 0 0-2.822l-7.284-7.224H36c1.102 0 1.999-.889 1.999-1.99a1.995 1.995 0 0 0-2-1.992H6.96l7.05-6.99a1.985 1.985 0 0 0 0-2.822 2.005 2.005 0 0 0-2.822 0Z"
                                />
                            </svg>
                        </Link>
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
                                        backgroundColor: getRatingColor(movie.vote_average),
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
                                {movie.genres?.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                            {credits ? (
                                <p>
                                    <b>Director:</b>{' '}
                                    {
                                        credits?.crew?.find(
                                            (element) => element.job === 'Director',
                                        )?.name
                                    }
                                </p>
                            ) : null}
                            <p className="paragraph">
                                <b>Summary:</b> {movie.overview}
                            </p>
                            <p className={styles.originalTitle}>
                                <b>Original title:</b>{' '}
                                <i>{movie.original_title || movie.title}</i>
                            </p>
                            <ul className={styles.links}>
                                {movie.imdb_id && (
                                    <li>
                                        <a
                                            href={`https://imdb.com/title/${movie.imdb_id}`}
                                            title="Go to this movie's page on the Internet Movie Database"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png"
                                                width="32px"
                                                alt="IMDb"
                                            />
                                        </a>
                                    </li>
                                )}
                                {tmdbLink && (
                                    <li>
                                        <a
                                            href={tmdbLink}
                                            title="See JustWatch options on the TMDB website"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.webp"
                                                width="120px"
                                                alt="JustWatch"
                                            />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {recommendations ? (
                        <section>
                            <h3>You might also like…</h3>
                            <MovieCarousel movies={recommendations.results} />
                        </section>
                    ) : null}
                </div>
            </>
        );
    }

    return (
        <Layout>{content}</Layout>
    );
};
