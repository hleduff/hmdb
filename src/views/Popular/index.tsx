import { Helmet } from 'react-helmet';

import { useAppSelector } from '../../app/store';
import { Layout, Loader, Message, MovieCard, MovieGrid } from '../../components';
import { useGetPopularMoviesQuery } from '../../features/api/apiSlice';

export const Popular = () => {
    const locale = useAppSelector((state) => state.locale.locale);

    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPopularMoviesQuery(locale);

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <>
                <Helmet>
                    <title>Popular movies - HMDb</title>
                </Helmet>
                {movies.results.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </>
        );
    } else if (isError) {
        content = <Message isError={true} text={error.toString()} />;
    }

    return <Layout><MovieGrid>{content}</MovieGrid></Layout>;
};
