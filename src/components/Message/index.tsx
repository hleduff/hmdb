import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './style.module.css';

export const Message = ({ isError = false, text }) => (
    <div className={classNames(styles.message, isError && styles.error)}>
        <p>{text}</p>
    </div>
);

Message.propTypes = {
    isError: PropTypes.bool,
    text: PropTypes.string.isRequired,
};
