import { gql, useQuery } from '@apollo/client';

const API_KEY = import.meta.env.VITE_API_KEY;

export const usePopularMovies = () => {
    const { data, loading, error } = useQuery(gql`
            query {
                popularMovies @rest(path: "/movie/popular?api_key=${API_KEY}") {
                    results {
                        id
                        poster_path
                        title
                    }
                }
            }
    `);

    return {
        movies: data?.popularMovies.results,
        loading,
        error,
    };
};

export const useMovie = (id) => {
    const { data, loading, error } = useQuery(
        gql`
            query ($id: ID!) {
                movie(id: $id) @rest(path: "/movie/${id}?api_key=${API_KEY}") {
                    genres
                    id
                    imdb_id
                    overview
                    originalTitle
                    poster_path
                    release_date
                    runtime
                    title
                    vote_average
                    credits(id: $id) @rest(path: "/movie/${id}/credits?api_key=${API_KEY}") {
                        crew
                    }
                    recommendations(id: $id) @rest(path: "/movie/${id}/recommendations?api_key=${API_KEY}") {
                        results {
                            id
                            poster_path
                            title
                        }
                    }
                }
            }
    `,
        {
            variables: {
                id,
            },
        },
    );

    return {
        data: data?.movie,
        loading,
        error,
    };
};
