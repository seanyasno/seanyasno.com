import type { NextPage } from 'next';
import { Box, Grid, Card, Typography } from '@mui/material';
import {
  Hero,
  Footer,
  AboutMeSection,
  KnowledgeSection,
  ResponsiveBox,
} from '@/components/index';
import React, { Component, ReactElement, useRef } from 'react';
import {
  Api,
  DesktopWindows,
  Dns,
  LaptopWindows,
  PhoneIphone,
  Storage,
} from '@mui/icons-material';
import { theme } from 'src/consts/theme/theme';

type ItemProps = {
  icon?: ReactElement;
  title: string;
};

const Item: React.FC<ItemProps> = (props) => {
  const { icon, title } = props;

  return (
    <Card
      sx={{
        borderRadius: '12px',
        padding: '20px 30px',
        display: 'flex',
        alignItems: 'center',
      }}
      elevation={3}
    >
      <Box
        sx={{ color: theme.palette.primary.main, marginRight: '30px' }}
        display={{ xs: 'none', lg: 'block' }}
      >
        {icon}
      </Box>
      <Box>
        <Box
          sx={{
            color: theme.palette.primary.main,
            alignItems: 'center',
          }}
          display={{ xs: 'flex', lg: 'none' }}
        >
          <Box
            sx={{ marginRight: '10px' }}
            display={{ xs: 'none', sm: 'block' }}
          >
            {icon}
          </Box>
          <Typography variant='h5'>{title}</Typography>
        </Box>
        <Box display={{ xs: 'none', lg: 'block' }}>
          <Typography variant='h5'>{title}</Typography>
        </Box>
        {props.children}
      </Box>
    </Card>
  );
};

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
            I can connect to different type of databases such as{' '}
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
        xsStyle={{ padding: '0px 20px', marginTop: '30px' }}
        mdStyle={{ padding: '40px 60px', marginTop: '20px' }}
      >
        <KnowledgeSection />
      </ResponsiveBox>
      <Box sx={{ height: '5vh' }}>
        <hr style={{ borderColor: '#E6ECF855' }} />
      </Box>

      <ResponsiveBox
        xsStyle={{ padding: '10px 20px' }}
        mdStyle={{ padding: '10px 60px' }}
      >
        <Typography variant='h3' sx={{ marginBottom: '30px' }}>
          My Best Strengths
        </Typography>
        <Grid container spacing={4}>
          {items.map(({ icon, title, content }, index) => (
            <Grid key={index} item xs={12} lg={6}>
              <Item title={title} icon={icon}>
                {content}
              </Item>
            </Grid>
          ))}
        </Grid>
      </ResponsiveBox>
      <Footer />
    </Box>
  );
};

export default Home;
