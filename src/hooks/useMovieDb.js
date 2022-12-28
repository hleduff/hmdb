import axios from 'axios';
import { useEffect, useState } from 'react';

const client = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
    },
});

export const usePopularMovies = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        client
            .get(`/movie/popular`)
            .then((res) => setData(res.data.results))
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true));
    }, []);

    return { data, error, loaded };
};

export const useMovie = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        client
            .get(`/movie/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true));
    }, [id]);

    return { data, error, loaded };
};

export const useMovieCredits = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        client
            .get(`/movie/${id}/credits`)
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true));
    }, [id]);

    return { data, error, loaded };
};

export const useRecommendations = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        client
            .get(`/movie/${id}/recommendations`)
            .then((res) => setData(res.data.results.slice(0, 10)))
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true));
    }, [id]);

    return { data, error, loaded };
};
