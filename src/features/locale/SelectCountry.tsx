import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CustomSelect } from '../../components';
import { setLocale } from './localeSlice';

const COUNTRIES = [
    'FR',
    'ES',
    'US',
];

export const SelectCountry = () => {
    const dispatch = useDispatch();
    const [country, setCountry] = useState(COUNTRIES[0]);

    const handleChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;

        setCountry(value);
        dispatch(setLocale({ locale: value }));
    };

    return (
        <CustomSelect
            onChange={handleChange}
            options={COUNTRIES}
            value={country}
        />
    );
};
