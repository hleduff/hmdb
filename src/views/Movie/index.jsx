import { Link, useParams } from 'react-router-dom';

import { Layout, Loader, Message } from '../../components';
import { useMovie } from '../../hooks';
import { getImage } from '../../utils/utils';
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
        return (
            <Layout>
                <Loader />
            </Layout>
        );
    } else {
        return (
            <Layout>
                <div className={styles.movie}>
                    <div className={styles.poster}>
                        <img
                            className={styles.poster}
                            src={getImage(data.poster_path)}
                            alt={`Poster for ${data.title}`}
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.header}>
                            <h2>{data.title}</h2>
                            <Link to={'/'}>&times;</Link>
                        </div>
                        <p>
                            <i>{data.original_title}</i>
                        </p>
                        <dl>
                            <dt>Synopsis:</dt>
                            <dd>{data.overview}</dd>
                        </dl>
                        <p>Rating: {data.vote_average}</p>
                    </div>
                </div>
            </Layout>
        );
    }
};
