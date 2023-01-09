import { Link } from 'react-router-dom';

import { IMovieDetails } from '../../types';
import { getImage } from '../../utils';

import styles from './style.module.css';

export const MovieCard = ({
    id = 0,
    poster_path = '',
    title = '',
}: Pick<IMovieDetails, 'id' | 'poster_path' | 'title'>) => (
    <Link to={`/movie/${id}`} className={styles.link}>
        <div className={styles.card}>
            <img
                className={styles.poster}
                src={getImage(poster_path)}
                alt={`Poster for ${title}`}
            />
            <div className={styles.overlay}>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    </Link>
);
