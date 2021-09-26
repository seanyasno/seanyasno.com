import type { NextPage } from 'next';
import Head from 'next/head';
import { Typography, Box, Avatar } from '@mui/material';
import { theme } from 'src/consts/theme/theme';
import { Navbar, Hero } from '@/components/index';
import { useRef } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  const sectionEl = useRef(null);

  // React, JavaScript, TypeScript, Java, C#, Python, Git
  // Flutter, Android Studio, HTML, CSS, SQL, PostgreSQL

  return (
    <Box>
      <Hero sectionEl={sectionEl} />
      <Box
        sx={{
          display: 'flex',
          height: '50vh',
          padding: '0 200px',
          alignItems: 'center',
          color: theme.palette.secondary.contrastText,
        }}
        ref={sectionEl}
      >
        <Box sx={{ display: 'inline-block', width: '600px', margin: 'auto' }}>
          <Typography sx={{ marginBottom: '26px' }} variant='h3'>
            Hi, I’m Sean Yasnogordski
            <Typography variant='subtitle1'>
              (You can just call me Sean or Seansi)
            </Typography>
          </Typography>
          <Typography paragraph variant='h6'>
            I speciallize in rapidly building web and mobile applications. I’m
            also a high passion developer with intense curiosity for creating
            more content and expanding my horizon of knowledge.
          </Typography>
          <Typography paragraph variant='h6'>
            You can join my journey through my blogs and see the code that I
            commit on Github.
          </Typography>
        </Box>

        <Avatar
          sx={{ width: '270px', height: '270px', margin: 'auto' }}
          src='/images/avatar.jpg'
          alt='Sean Yasnogorodski'
        />
      </Box>
      <Box
        sx={{ height: '50vh', width: '100%', backgroundColor: 'gray' }}
      ></Box>
    </Box>
  );
};

export default Home;
