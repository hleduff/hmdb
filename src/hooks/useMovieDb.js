import axios from 'axios';
import { useEffect, useState } from 'react';

const URL_API = import.meta.env.VITE_URL_API;
const API_KEY = import.meta.env.VITE_API_KEY;

export const usePopularMovies = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`${URL_API}/movie/popular?api_key=${API_KEY}`)
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
        axios
            .get(`${URL_API}/movie/${id}?api_key=${API_KEY}`)
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoaded(true));
    }, []);

    return { data, error, loaded };
};
