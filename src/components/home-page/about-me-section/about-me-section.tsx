import { links, theme } from '@/consts/index';
import { Typography, Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { MutableRefObject } from 'react';

type AboutMeSectionProps = {
  sectionEl: MutableRefObject<null>;
};

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  sectionEl,
}) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        minHeight: '50vh',
        // padding: '0 200px',
        alignItems: 'center',
        color: theme.palette.secondary.contrastText,
      }}
      ref={sectionEl}
    >
      <Grid
        item
        sm={8}
        sx={{
          display: 'inline-block',
          width: '600px',
          margin: 'auto',
          padding: '60px',
        }}
      >
        <Typography sx={{ marginBottom: '26px' }} variant='h3'>
          Hi, I’m Sean Yasnogordski
          <Typography variant='subtitle1'>
            (You can just call me Sean or Seansi)
          </Typography>
        </Typography>
        <Typography paragraph variant='h6'>
          I speciallize in rapidly building web and mobile applications. I’m
          also a high passion developer with intense curiosity for creating more
          content and expanding my horizon of knowledge.
        </Typography>
        <Typography paragraph variant='h6'>
          You can join my journey through my blogs and see the code that I
          commit on{' '}
          <a href={links.github}>
            <b>Github.</b>
          </a>
        </Typography>
      </Grid>
      <Grid item sm={4} sx={{ display: 'flex', margin: 'auto' }}>
        <Avatar
          sx={{ width: '270px', height: '270px', margin: 'auto' }}
          src='/images/avatar.jpg'
          alt='Sean Yasnogorodski'
        />
      </Grid>
    </Grid>
  );
};
