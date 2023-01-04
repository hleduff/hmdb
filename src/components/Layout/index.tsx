import classNames from 'classnames';
import { ReactNode } from 'react';

import { Header } from '../Header';

import styles from './style.module.css';

export const Layout = ({
    className = '',
    children,
}: {
    className?: string;
    children: ReactNode;
}) => (
    <div className={classNames(styles.root, className)}>
        <Header />
        <main className={styles.main}>{children}</main>
    </div>
);
