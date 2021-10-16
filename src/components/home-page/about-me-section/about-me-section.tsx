import { links, theme } from '@/consts/index';
import { Typography, Avatar, Grid } from '@mui/material';
import React, { MutableRefObject } from 'react';
import { ResponsiveBox } from '@/components/index';

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
        }}
      >
        <Typography sx={{ marginBottom: '26px' }} variant='h3'>
          Hi, I’m Sean Yasnogordski
          <Typography variant='subtitle1'>
            (You can just call me Sean or Seansi)
          </Typography>
        </Typography>
        <Typography paragraph variant='h6'>
          I specialize in rapidly building web and mobile applications. I’m also
          a high passion developer with intense curiosity for creating more
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
      <ResponsiveBox
        Element={Grid}
        elementProps={{
          item: true,
          md: 4,
        }}
        xsStyle={{
          margin: 'auto',
          paddingBottom: '60px',
        }}
      >
        {/* <Grid item sm={4} sx={{ display: 'flex', margin: 'auto' }}> */}
        <Avatar
          sx={{ width: '270px', height: '270px', margin: 'auto' }}
          src='/images/avatar.webp'
          alt='Sean Yasnogorodski'
        />
        {/* </Grid> */}
      </ResponsiveBox>
    </Grid>
  );
};
