import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IMovieList, IMovieDetails, ICredits } from '../../types';

const URL_API = import.meta.env.VITE_URL_API as string;
const API_KEY = import.meta.env.VITE_API_KEY as string;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: URL_API,
    }),
    endpoints: (build) => ({
        getPopularMovies: build.query<IMovieList, void>({
            query: () => ({
                url: '/movie/popular',
                params: { api_key: API_KEY },
            }),
        }),
        getTopRatedMovies: build.query<IMovieList, void>({
            query: () => ({
                url: '/movie/top_rated',
                params: { api_key: API_KEY },
            }),
        }),
        getUpcomingMovies: build.query<IMovieList, void>({
            query: () => ({
                url: '/movie/upcoming',
                params: { api_key: API_KEY },
            }),
        }),
        getMovie: build.query<IMovieDetails, string>({
            query: (id) => ({
                url: `/movie/${id}`,
                params: { api_key: API_KEY },
            }),
        }),
        getMovieCredits: build.query<ICredits, string>({
            query: (id) => ({
                url: `/movie/${id}/credits`,
                params: { api_key: API_KEY },
            }),
        }),
        getRecommendations: build.query<IMovieList, string>({
            query: (id) => ({
                url: `/movie/${id}/recommendations`,
                params: { api_key: API_KEY },
            }),
        }),
    }),
});

export const {
    useGetMovieCreditsQuery,
    useGetMovieQuery,
    useGetPopularMoviesQuery,
    useGetRecommendationsQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
} = apiSlice;
