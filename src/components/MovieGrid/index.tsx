
import { ReactNode } from 'react';
import styles from './style.module.css';

export const MovieGrid = ({
    children,
}: {
    children: ReactNode,
}) => <div className={styles.grid}>{children}</div>;
