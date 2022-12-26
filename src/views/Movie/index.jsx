import { Link, useParams } from 'react-router-dom';

import { Layout, Message } from '../../components';
import { useMovie } from '../../hooks';
import styles from './style.module.css';

export const Movie = () => {
    const { movieId } = useParams();
    const { data, error, loaded } = useMovie(movieId);

    if (error) {
        return (
            <Layout>
                <Message isError={true} text={`Error: ${error.message}`} />
            </Layout>
        );
    } else if (!loaded) {
        return <Layout>Loading...</Layout>;
    } else {
        return (
            <Layout className={styles.root}>
                <h1>{data.title}</h1>
                <Link to={'/'}>&lt; Back</Link>
            </Layout>
        );
    }
};
