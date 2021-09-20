import type { NextPage } from 'next';
import { Blog } from '@/types/index';
import { Container, Typography, Box, Grid } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1D212D',
        color: '#EAE0D9',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
        }}
      >
        <Typography variant='h2'>Sean Yasnogorodski</Typography>
        <Typography variant='subtitle1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
