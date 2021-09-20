import type { NextPage } from 'next';
import Head from 'next/head';
import { Blog } from '@/types/index';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { theme } from 'src/consts/theme/theme';
import { Instagram, LinkedIn, Place, Twitter } from '@mui/icons-material';
import { Navbar } from '@/components/index';

const Home: NextPage = () => {
  return (
    <Box>
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
        <Box
          sx={{ display: 'flex', flex: 1, width: '100%', alignItems: 'start' }}
        >
          <Navbar />
        </Box>

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
          }}
          maxWidth={false}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              paddingBottom: '40px',
              paddingLeft: '30px',
            }}
          >
            <Place sx={{ color: '#877D61' }} />
            <Typography sx={{ color: '#575A63', paddingLeft: '16px' }}>
              Located in Israel
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flex: 1,
              flexFlow: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ color: '#877D61' }}>Scroll Down</Typography>
            <Box
              sx={{
                backgroundColor: '#877D61',
                height: '100px',
                width: '1px',
                marginTop: '30px',
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flex: 1,
              justifyContent: 'end',
              paddingBottom: '40px',
              paddingRight: '30px',
            }}
          >
            <Instagram sx={{ color: '#575A63' }} />
            <LinkedIn sx={{ color: '#575A63', padding: '0 16px' }} />
            <Twitter sx={{ color: '#575A63' }} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
