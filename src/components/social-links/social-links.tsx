import { links } from '@/consts/index';
import {
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
  Mail,
} from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Box, SxProps, Theme } from '@mui/system';
import React from 'react';

type SocialLinksProps = {
  sx?: SxProps<Theme>;
  padding?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ sx, padding }) => {
  return (
    <Grid container sx={sx}>
      <Grid item xs={6} sm={3} xl={2}>
        <a href={links.instagram}>
          <Instagram
            sx={{ color: '#575A63', display: 'flex', margin: 'auto' }}
          />
        </a>
      </Grid>
      <Grid item xs={6} sm={3} xl={2}>
        <a href={links.linkedIn}>
          <LinkedIn
            sx={{ color: '#575A63', display: 'flex', margin: 'auto' }}
          />
        </a>
      </Grid>
      <Grid item xs={6} sm={3} xl={2}>
        <a href={links.github}>
          <GitHub sx={{ color: '#575A63', display: 'flex', margin: 'auto' }} />
        </a>
      </Grid>
      <Grid item xs={6} sm={3} xl={2}>
        <a href={links.twitter}>
          <Twitter sx={{ color: '#575A63', display: 'flex', margin: 'auto' }} />
        </a>
      </Grid>
      <Grid item xl={2} />
    </Grid>
  );
};
