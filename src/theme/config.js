import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: [
            '"Nunito"',
            'sans-serif',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 760,
            lg: 900,
            xl: 960,
        },
    },
    palette: {
        primary: {
            main: '#106cc8',
        },
    },
});