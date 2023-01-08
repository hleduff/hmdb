import { Loader, Message, MovieCard } from '../../components';
import { useGetTopRatedMoviesQuery } from '../api/apiSlice';

import styles from './style.module.css';

export const TopRated = () => {
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTopRatedMoviesQuery();

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <>
                {movies.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </>
        );
    } else if (isError) {
        content = <Message isError={true} text={error.toString()} />;
    }

    return <div className={styles.grid}>{content}</div>;
};
