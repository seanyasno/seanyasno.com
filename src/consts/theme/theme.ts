import { Theme, createTheme } from '@mui/material';

export const theme: Theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
  palette: {
    primary: {
      main: '#1D212D',
      contrastText: '#EAE0D9',
    },
  },
});
