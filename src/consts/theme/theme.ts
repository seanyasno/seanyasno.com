import { Theme, createTheme, responsiveFontSizes } from '@mui/material';

export const theme: Theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'Quicksand',
    },
    palette: {
      primary: {
        main: '#1D212D',
        contrastText: '#EAE0D9',
      },
      secondary: {
        main: '#EAE0D9',
        contrastText: '#1D212D',
      },
    },
  })
);
