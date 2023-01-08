import { ReactElement, useState } from 'react';

import { Tab } from '../';
import type { TabProps } from '../';

import styles from './style.module.css';

export const Tabs = ({
    children = [],
    preSelectedTabIndex = 0,
}: {
    children: ReactElement<TabProps>[];
    preSelectedTabIndex?: number;
}): JSX.Element => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex);

    return (
        <>
            <div className={styles.tabList} role="tablist">
                {children.map((item, index) => (
                    <Tab
                        key={item.props.title}
                        title={item.props.title}
                        index={index}
                        isActive={index === selectedTabIndex}
                        setSelectedTab={setSelectedTabIndex}
                    />
                ))}
            </div>
            <div
                role="tabpanel"
                aria-labelledby={`btn-${selectedTabIndex}`}
                id={`tabpanel-${selectedTabIndex}`}
            >
                {children[selectedTabIndex]}
            </div>
        </>
    );
};
