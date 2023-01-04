import classNames from 'classnames';
import * as PropTypes from 'prop-types';

import { Header } from '../Header';
import styles from './style.module.css';

const LayoutPropTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export const Layout = ({
    className,
    children,
}: PropTypes.InferProps<typeof LayoutPropTypes>) => (
    <div className={classNames(styles.root, className)}>
        <Header />
        <main className={styles.main}>{children}</main>
    </div>
);
