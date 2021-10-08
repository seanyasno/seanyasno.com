import { Box } from '@mui/system';
import React from 'react';

type ResponsiveBoxProps = {
  xsStyle?: { [key: string]: unknown };
  smStyle?: { [key: string]: unknown };
  mdStyle?: { [key: string]: unknown };
  lgStyle?: { [key: string]: unknown };
  xlStyle?: { [key: string]: unknown };
};

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = (props) => {
  const { xsStyle, smStyle, mdStyle, lgStyle, xlStyle, children } = props;

  return (
    <>
      <Box
        sx={xsStyle}
        display={{
          xs: 'block',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Box>
      <Box
        sx={smStyle}
        display={{
          xs: 'none',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Box>
      <Box
        sx={mdStyle}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Box>
      <Box
        sx={lgStyle}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
          xl: 'none',
        }}
      >
        {children}
      </Box>
      <Box
        sx={xlStyle}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'block',
        }}
      >
        {children}
      </Box>
    </>
  );
};
