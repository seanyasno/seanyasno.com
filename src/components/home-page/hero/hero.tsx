import { theme } from '@/consts/index';
import { Place } from '@mui/icons-material';
import { Box, Typography, Container } from '@mui/material';
import React from 'react';
import { Navbar } from 'src/components/navbar/navbar';
import { SocialLinks } from '@/components/index';

type HeroProps = {
  sectionEl: any;
};

export const Hero: React.FC<HeroProps> = (sectionEl: any) => {
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
          textAlign: 'center',
          flex: 1,
        }}
      >
        <Typography variant='h1'>Sean Yasnogorodski</Typography>
        <Typography sx={{ marginTop: '18px' }} variant='subtitle1'>
          Mobile And Full-Stack Web Developer
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

        <SocialLinks
          sx={{
            display: 'flex',
            flex: 1,
            maxWidth: '400px',
            justifyContent: 'end',
            paddingBottom: '40px',
          }}
        />
      </Container>
    </Box>
  );
};
