import { Theme, createTheme, responsiveFontSizes } from '@mui/material';
import _ from 'lodash';

const theme: Theme = responsiveFontSizes(
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

theme.typography.h1 = {
  fontSize: '1rem',
  fontWeight: 'lighter',
  [theme.breakpoints.up('xs')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '4.7129rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.3556rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '6rem',
  },
};

export { theme };
