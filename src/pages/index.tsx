import type { NextPage } from 'next';
import Head from 'next/head';
import { Typography, Box, Avatar } from '@mui/material';
import { theme } from 'src/consts/theme/theme';
import { Navbar, Hero, Footer, AboutMeSection } from '@/components/index';
import { useRef } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  const sectionEl = useRef(null);

  // React, JavaScript, TypeScript, Java, C#, Python, Git
  // Flutter, Android Studio, HTML, CSS, SQL, PostgreSQL

  return (
    <Box>
      <Hero sectionEl={sectionEl} />
      <AboutMeSection sectionEl={sectionEl} />
      <Box
        sx={{ height: '50vh', width: '100%', backgroundColor: 'gray' }}
      ></Box>
      <Footer />
    </Box>
  );
};

export default Home;
