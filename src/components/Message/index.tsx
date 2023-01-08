import classNames from 'classnames';

import styles from './style.module.css';

export const Message = ({
    isError = false,
    text = '',
}: {
    isError?: boolean;
    text: string;
}) => (
    <div className={classNames(styles.message, isError && styles.error)}>
        <p>{text}</p>
    </div>
);
