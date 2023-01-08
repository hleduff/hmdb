import { ReactElement } from 'react';

export const TabPanel = ({
    children,
}: {
    title: string;
    children: ReactElement | ReactElement[];
}): JSX.Element => <div>{children}</div>;
