import { useAppSelector } from '../../app/store';
import { Loader, Message, MovieCard, MovieGrid } from '../../components';
import { useGetPopularMoviesQuery } from '../api/apiSlice';

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

    return <MovieGrid>{content}</MovieGrid>;
};
