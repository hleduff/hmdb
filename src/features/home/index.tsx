import { Layout, Tabs, TabPanel } from '../../components';
import { Popular, TopRated, Upcoming } from '../movies';

export const Home = () => {
    return (
        <Layout>
            <Tabs>
                <TabPanel title="Popular">
                    <div>
                        <Popular />
                    </div>
                </TabPanel>
                <TabPanel title="Top Rated">
                    <div>
                        <TopRated />
                    </div>
                </TabPanel>
                <TabPanel title="Upcoming">
                    <div>
                        <Upcoming />
                    </div>
                </TabPanel>
            </Tabs>
        </Layout>
    );
};
