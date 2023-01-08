import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ICredits, IIDRequest, IMovieDetails, IMovieList } from '../../types';
import { getLanguage } from '../../utils';

const URL_API = import.meta.env.VITE_URL_API as string;
const API_KEY = import.meta.env.VITE_API_KEY as string;

const defaultParams = {
    api_key: API_KEY,
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: URL_API,
    }),
    endpoints: (build) => ({
        getPopularMovies: build.query<IMovieList, string>({
            query: (locale: string) => ({
                url: '/movie/popular',
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
            }),
        }),
        getTopRatedMovies: build.query<IMovieList, string>({
            query: (locale: string) => ({
                url: '/movie/top_rated',
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
            }),
        }),
        getUpcomingMovies: build.query<IMovieList, string>({
            query: (locale: string) => ({
                url: '/movie/upcoming',
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
            }),
        }),
        getMovie: build.query<IMovieDetails, IIDRequest>({
            query: ({ id, locale }) => ({
                url: `/movie/${id}`,
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
            }),
        }),
        getMovieCredits: build.query<ICredits, IIDRequest>({
            query: ({ id, locale }) => ({
                url: `/movie/${id}/credits`,
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
            }),
        }),
        getRecommendations: build.query<IMovieList, IIDRequest>({
            query: ({ id, locale }) => ({
                url: `/movie/${id}/recommendations`,
                params: {
                    ...defaultParams,
                    region: locale,
                    language: getLanguage(locale),
                },
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
