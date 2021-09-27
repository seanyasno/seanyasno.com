import type { NextPage } from 'next';
import { Box } from '@mui/material';
import {
  Hero,
  Footer,
  AboutMeSection,
  KnowledgeSection,
} from '@/components/index';
import React, { useRef } from 'react';

const Home: NextPage = () => {
  const sectionEl = useRef(null);

  return (
    <Box>
      <Hero sectionEl={sectionEl} />
      <AboutMeSection sectionEl={sectionEl} />
      <hr style={{ borderColor: '#E6ECF855' }} />
      <KnowledgeSection />
      <Footer />
    </Box>
  );
};

export default Home;
