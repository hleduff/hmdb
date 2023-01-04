import classNames from 'classnames';
import * as PropTypes from 'prop-types';

import styles from './style.module.css';

const MessagePropTypes = {
    isError: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

export const Message = ({
    isError = false,
    text,
}: PropTypes.InferProps<typeof MessagePropTypes>) => (
    <div className={classNames(styles.message, isError && styles.error)}>
        <p>{text}</p>
    </div>
);
