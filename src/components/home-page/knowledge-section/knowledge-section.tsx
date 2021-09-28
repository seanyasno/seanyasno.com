import { theme } from '@/consts/index';
import { Container, Grid, Typography } from '@mui/material';
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
        marginBottom: '60px',
      }}
    >
      <Grid
        item
        lg={6}
        sx={{ display: 'inline-block', marginTop: '80px', padding: '0 60px' }}
      >
        <Typography variant='h3' sx={{ marginBottom: '30px' }}>
          My Speciallity Knowledge
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
      <Grid
        item
        lg={5}
        sx={{
          display: 'inline-block',
          marginTop: '80px',
          padding: '0 60px',
        }}
      >
        <Typography variant='h3' sx={{ marginBottom: '30px' }}>
          My Best Strengths
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Frontend
            </Typography>
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Backend
            </Typography>
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Mobile
            </Typography>
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginBottom: '8px' }}
            >
              Misc
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant='h4' sx={{ marginBottom: '8px' }}>
              React (TS)
            </Typography>
            <Typography variant='h4' sx={{ marginBottom: '8px' }}>
              Node.JS
            </Typography>
            <Typography variant='h4' sx={{ marginBottom: '8px' }}>
              Flutter
            </Typography>
            <Typography variant='h4' sx={{ marginBottom: '8px' }}>
              Python, C#
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
