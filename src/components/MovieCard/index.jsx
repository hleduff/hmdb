import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getImage } from '../../utils/utils';
import styles from './style.module.css';

export const MovieCard = ({ movie }) => (
    <Link to={`/movie/${movie.id}`}>
        <div className={styles.card}>
            <img
                className={styles.poster}
                src={getImage(movie.poster_path)}
                alt={`Poster for ${movie.title}`}
            />
            <div className={styles.overlay}>
                <p className={styles.title}>{movie.title}</p>
            </div>
        </div>
    </Link>
);

MovieCard.propTypes = {
    movie: PropTypes.object,
};
