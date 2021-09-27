import { links, theme } from '@/consts/index';
import {
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { SocialLinks } from '@/components/index';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        height: '25vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
      }}
    >
      {/* <Box
        sx={{
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      > */}
      <SocialLinks
        sx={{
          width: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        padding='16px'
      />
      {/* <Instagram sx={{ color: '#575A63' }} />
        <LinkedIn sx={{ color: '#575A63', padding: '0 16px' }} />
        <GitHub sx={{ color: '#575A63', paddingRight: '16px' }} />
        <Twitter sx={{ color: '#575A63', paddingRight: '16px' }} />
        <Mail sx={{ color: '#575A63' }} />
      </Box> */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant='caption'>© 2021 Sean Yasnogorodski</Typography>
      </Box>
    </Box>
  );
};
