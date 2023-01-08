import classNames from 'classnames';
import { useCallback } from 'react';

import styles from './style.module.css';

export interface TabProps {
    index: number;
    isActive?: boolean;
    setSelectedTab: (index: number) => void;
    title: string;
}

export const Tab = ({
    index,
    isActive,
    setSelectedTab,
    title = '',
}: TabProps): JSX.Element => {
    const handleClick = useCallback(() => {
        setSelectedTab(index);
    }, [setSelectedTab, index]);

    return (
        <button
            className={classNames(styles.tab, isActive && styles.active)}
            onClick={handleClick}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`tabpanel-${index}`}
            tabIndex={isActive ? -1 : 0}
            id={`btn-${index}`}
        >
            {title}
        </button>
    );
};
