
import { ReactNode } from 'react';

import { MovieNav } from '../MovieNav';

import styles from './style.module.css';

export const MovieGrid = ({
    children,
}: {
    children: ReactNode,
}) => (
    <>
        <MovieNav />
        <div className={styles.grid}>{children}</div>
    </>
);
