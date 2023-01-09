import { Helmet } from 'react-helmet';

import { useAppSelector } from '../../app/store';
import { Layout, Loader, Message, MovieCard, MovieGrid } from '../../components';
import { useGetTopRatedMoviesQuery } from '../../features/api/apiSlice';

export const TopRated = () => {
    const locale = useAppSelector((state) => state.locale.locale);

    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTopRatedMoviesQuery(locale);

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <>
                <Helmet>
                    <title>Top rated movies - HMDb</title>
                </Helmet>
                {movies.results.map((movie) => (
                    <li>
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                        />
                    </li>
                ))}
            </>
        );
    } else if (isError) {
        content = <Message isError={true} text={error.toString()} />;
    }

    return <Layout><MovieGrid>{content}</MovieGrid></Layout>;
};
