import { Box } from '@mui/system';
import React, { ComponentType } from 'react';

type ResponsiveBoxProps = {
  Element?: ComponentType;
  xsStyle?: { [key: string]: unknown };
  smStyle?: { [key: string]: unknown };
  mdStyle?: { [key: string]: unknown };
  lgStyle?: { [key: string]: unknown };
  xlStyle?: { [key: string]: unknown };
};

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = (props) => {
  const {
    Element = Box,
    xsStyle,
    smStyle,
    mdStyle,
    lgStyle,
    xlStyle,
    children,
  } = props;

  return (
    <>
      <Element
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
      </Element>
      <Element
        sx={{ ...xsStyle, ...smStyle }}
        display={{
          xs: 'none',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        sx={{ ...xsStyle, ...smStyle, ...mdStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        sx={{ ...xsStyle, ...smStyle, ...mdStyle, ...lgStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        sx={{ ...xsStyle, ...smStyle, ...mdStyle, ...lgStyle, ...xlStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'block',
        }}
      >
        {children}
      </Element>
    </>
  );
};
