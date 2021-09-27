import { links } from '@/consts/index';
import {
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
  Mail,
} from '@mui/icons-material';
import { Box, SxProps, Theme } from '@mui/system';
import React from 'react';

type SocialLinksProps = {
  sx?: SxProps<Theme>;
  padding?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ sx, padding }) => {
  return (
    <Box sx={sx}>
      <a href={links.instagram}>
        <Instagram sx={{ color: '#575A63' }} />
      </a>
      <a href={links.linkedIn}>
        <LinkedIn sx={{ color: '#575A63', padding: `0 ${padding}` }} />
      </a>
      <a href={links.github}>
        <GitHub sx={{ color: '#575A63', paddingRight: `${padding}` }} />
      </a>
      <a href={links.twitter}>
        <Twitter sx={{ color: '#575A63', paddingRight: `${padding}` }} />
      </a>
      <a href={''}>
        <Mail sx={{ color: '#575A63' }} />
      </a>
    </Box>
  );
};
