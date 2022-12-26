import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Header } from '../Header';
import styles from './style.module.css';

export const Layout = ({ className, children }) => (
    <div className={classNames(styles.root, className)}>
        <Header />
        <main className={styles.main}>{children}</main>
    </div>
);

Layout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
