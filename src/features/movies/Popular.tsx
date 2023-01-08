import { Loader, Message, MovieCard, MovieGrid } from '../../components';
import { useGetPopularMoviesQuery } from '../api/apiSlice';

export const Popular = () => {
    const {
        data: movies,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPopularMoviesQuery();

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
