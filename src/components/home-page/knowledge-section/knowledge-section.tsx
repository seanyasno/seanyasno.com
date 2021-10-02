import { Avatar, Container, Grid, Typography } from '@mui/material';
import { theme } from '@/consts/index';
import Image from 'next/image';
import { Box } from '@mui/system';
import React from 'react';

export const KnowledgeSection: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        minHeight: '50vh',
        justifyContent: 'space-between',
        color: theme.palette.secondary.contrastText,
        margin: 'auto',
      }}
    >
      <Grid
        item
        lg={6}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          paddingTop: '0',
        }}
      >
        <Box display={{ xs: 'none', lg: 'block' }}>
          <Image
            alt='programmer'
            width='550px'
            height='550px'
            src='/images/undraw_programmer_imem.svg'
          />
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        sx={{
          display: 'inline-block',
          marginTop: '80px',
          padding: '40px 60px',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' sx={{ marginBottom: '30px' }}>
          My Speciality Knowledge
        </Typography>
        <Typography paragraph variant='h6'>
          I have a great passion for programming, and throughout the years
          I&apos;ve been experiencing different subjects on the programming
          spectrum. From coding in low level languages (Assembely, C/C++), to
          coding in high level languages (Java, C#, Python).
        </Typography>
        <Typography paragraph variant='h6'>
          In addion to coding, I&apos;ve also experienced some DevOps, Linux and
          Networking. All this knowledge I gathered through making projects,
          taking courses, CTFs, work and just reading and watching youtube
          videos.
        </Typography>
      </Grid>
    </Grid>
  );
};
