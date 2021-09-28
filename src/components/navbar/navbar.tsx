import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ height: '6vh' }} position='relative' elevation={0}>
      <Toolbar sx={{ justifyContent: 'end' }}>
        <Link href='/'>
          <Typography
            sx={{ fontWeight: 'light', marginRight: '30px', cursor: 'pointer' }}
          >
            Home
          </Typography>
        </Link>
        <Link href='/blogs'>
          <Typography
            sx={{ fontWeight: 'light', marginRight: '30px', cursor: 'pointer' }}
          >
            Blog
          </Typography>
        </Link>
        <Typography sx={{ fontWeight: 'light', marginRight: '30px' }}>
          About
        </Typography>
        <Typography sx={{ fontWeight: 'light', marginRight: '30px' }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
