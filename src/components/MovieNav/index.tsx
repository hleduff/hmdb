import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './style.module.css';

export const MovieNav = () => {
    const NAV = [
        {
            to: '/popular',
            title: 'Popular',
        },
        {
            to: '/toprated',
            title: 'Top Rated',
        },
        {
            to: '/upcoming',
            title: 'Upcoming',
        },
    ];

    return (
        <nav>
            <ul className={styles.nav}>
                {NAV.map((navEl) => (
                    <li key={navEl.title.replace(/\s+/g, '')}>
                        <NavLink
                            className={({ isActive }) => classNames(styles.link, isActive ? styles.active : undefined)}
                            to={navEl.to}
                        >
                            {navEl.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
