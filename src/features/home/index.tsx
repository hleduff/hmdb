import { Layout, Loader, Message, MovieCard } from '../../components';
import { useGetPopularMoviesQuery } from '../api/apiSlice';
import styles from './style.module.css';

export const Home = () => {
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPopularMoviesQuery();

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <div className={styles.grid}>
                {movies.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </div>
        );
    } else if (isError) {
        content = <Message isError={true} text={error.toString()} />;
    }

    return (
        <Layout>
            <h2>Popular movies</h2>
            {content}
        </Layout>
    );
};
