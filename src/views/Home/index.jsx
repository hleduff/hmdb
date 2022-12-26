import { Link } from 'react-router-dom';

import { Layout, Loader, Message } from '../../components';
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
