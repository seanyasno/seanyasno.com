import type { NextPage } from 'next';
import Head from 'next/head';
import { Blog } from '@/types/index';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { theme } from 'src/consts/theme/theme';
import { Instagram, LinkedIn, Place, Twitter } from '@mui/icons-material';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1D212D',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flex: 1 }}></Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          color: theme.palette.primary.contrastText,
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          flex: 1,
        }}
      >
        <Typography variant='h1'>Sean Yasnogorodski</Typography>
        <Typography variant='subtitle1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>

      <Container
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          paddingBottom: '15px',
        }}
        maxWidth={false}
      >
        <Box sx={{ display: 'flex' }}>
          <Place sx={{ color: '#877D61' }} />
          <Typography sx={{ color: '#575A63', paddingLeft: '16px' }}>
            Located in Israel
          </Typography>
        </Box>
        <Box>
          <Instagram sx={{ color: '#575A63' }} />
          <LinkedIn sx={{ color: '#575A63', padding: '0 8px' }} />
          <Twitter sx={{ color: '#575A63' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
