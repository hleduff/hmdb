import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_LOCALE = import.meta.env.VITE_DEFAULT_LOCALE as string;

const origState: {
    locale: string;
} = {
    locale: DEFAULT_LOCALE,
};

export const localeSlice = createSlice({
    name: 'locale',
    initialState: origState,
    reducers: {
        resetLocale: () => origState,
        setLocale: (
            state,
            {
                payload: { locale },
            }: PayloadAction<{ locale: string; }>,
        ) => {
            state.locale = locale;
        },
    },
});

export const { resetLocale, setLocale } = localeSlice.actions;

export default localeSlice.reducer;
