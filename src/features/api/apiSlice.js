import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const URL_API = import.meta.env.VITE_URL_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data, params }) => {
        try {
            const result = await axios({ url: baseUrl + url, method, data, params });
            return { data: result.data };
        } catch (axiosError) {
            const err = axiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: URL_API,
    }),
    endpoints: (builder) => ({
        getPopularMovies: builder.query({
            query: () => ({ url: '/movie/popular', params: { api_key: API_KEY } }),
            transformResponse: (response) => response.results,
        }),
        getMovie: builder.query({
            query: (id) => ({ url: `/movie/${id}`, params: { api_key: API_KEY } }),
        }),
        getMovieCredits: builder.query({
            query: (id) => ({
                url: `/movie/${id}/credits`,
                params: { api_key: API_KEY },
            }),
        }),
        getRecommendations: builder.query({
            query: (id) => ({
                url: `/movie/${id}/recommendations`,
                params: { api_key: API_KEY },
            }),
            transformResponse: (response) => response.results,
        }),
    }),
});

export const {
    useGetMovieCreditsQuery,
    useGetMovieQuery,
    useGetPopularMoviesQuery,
    useGetRecommendationsQuery,
} = apiSlice;
