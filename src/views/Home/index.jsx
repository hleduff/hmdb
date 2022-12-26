import { CardMovie, Layout, Loader, Message } from '../../components';
import { usePopularMovies } from '../../hooks';
import styles from './style.module.css';

export const Home = () => {
    const { data, error, loaded } = usePopularMovies();

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
                <h2>Popular movies</h2>
                <div className={styles.grid}>
                    {data.map((movie) => (
                        <CardMovie key={movie.id} movie={movie} />
                    ))}
                </div>
            </Layout>
        );
    }
};
