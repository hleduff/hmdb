import { Layout, Loader, Message, MovieCard } from '../../components';
import { useGetPopularMoviesQuery } from '../api/apiSlice';
import styles from './style.module.css';

export const Home = () => {
    const {
        data: movies = [],
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPopularMoviesQuery();

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        const movieList = movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ));

        content = <div className={styles.grid}>{movieList}</div>;
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
