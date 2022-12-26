import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { usePopularMovies } from '../../hooks';
import styles from './style.module.css';

export const Home = () => {
    const { data, error, loaded } = usePopularMovies();

    if (error) {
        return <Layout>Error: {error.message}</Layout>;
    } else if (!loaded) {
        return <Layout>Loading...</Layout>;
    } else {
        return (
            <Layout>
                <div className={styles.grid}>
                    {data.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        </div>
                    ))}
                </div>
            </Layout>
        );
    }
};
