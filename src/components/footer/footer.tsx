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
      <SocialLinks
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        padding='16px'
      />
      <Box sx={{ margin: '30px 0' }}>
        <Typography variant='caption'>© 2021 Sean Yasnogorodski</Typography>
      </Box>
    </Box>
  );
};
