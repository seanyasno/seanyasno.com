import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import {
  Hero,
  Footer,
  AboutMeSection,
  KnowledgeSection,
  ResponsiveBox,
  StrengthsSection,
} from '@/components/index';
import React, { ReactElement, useRef } from 'react';
import { Api, LaptopWindows, PhoneIphone, Storage } from '@mui/icons-material';

const Home: NextPage = () => {
  const sectionEl = useRef(null);

  const items: { icon: ReactElement; title: string; content: ReactElement }[] =
    [
      {
        icon: <LaptopWindows />,
        title: 'Frontend Development',
        content: (
          <Typography sx={{ fontWeight: 'light' }} variant='h6'>
            I build fast, responsive, scalable and beautiful websites using
            <b> React </b>and <b>Next.js</b>.
          </Typography>
        ),
      },
      {
        icon: <Api />,
        title: 'Backend Development',
        content: (
          <Typography sx={{ fontWeight: 'light' }} variant='h6'>
            I usually use <b>Node.JS</b> (with <b>TypeScript</b>) with{' '}
            <b>Express</b> to create server API.
          </Typography>
        ),
      },
      {
        icon: <Storage />,
        title: 'Database Management',
        content: (
          <Typography sx={{ fontWeight: 'light' }} variant='h6'>
            I can work with different type of databases such as{' '}
            <b>PostgreSQL</b> and <b>MongoDB</b>.
          </Typography>
        ),
      },
      {
        icon: <PhoneIphone />,
        title: 'Mobile Development',
        content: (
          <Typography sx={{ fontWeight: 'light' }} variant='h6'>
            I use <b>Flutter</b> in order to build fast and good looking apps
            for both <b>Android</b> and <b>IOS</b>.
          </Typography>
        ),
      },
    ];

  return (
    <Box sx={{ width: '100%' }}>
      <Hero sectionEl={sectionEl} />
      <AboutMeSection sectionEl={sectionEl} />
      <hr style={{ borderColor: '#E6ECF855' }} />
      <ResponsiveBox
        xsStyle={{ padding: '0px 20px', marginTop: '10px' }}
        mdStyle={{ padding: '20px 60px', marginTop: '0px' }}
      >
        <KnowledgeSection />
      </ResponsiveBox>
      <Box sx={{ height: '5vh' }}>
        <hr style={{ borderColor: '#E6ECF855' }} />
      </Box>

      <ResponsiveBox
        xsStyle={{ padding: '10px 20px', paddingBottom: '50px' }}
        mdStyle={{ padding: '10px 60px' }}
      >
        <StrengthsSection items={items} />
      </ResponsiveBox>
      <Footer />
    </Box>
  );
};

export default Home;
