import { Box } from '@mui/system';
import React, { ComponentType } from 'react';

type ResponsiveBoxProps = {
  Element?: ComponentType;
  elementProps?: {};
  display?: string;
  xsStyle?: { [key: string]: unknown };
  smStyle?: { [key: string]: unknown };
  mdStyle?: { [key: string]: unknown };
  lgStyle?: { [key: string]: unknown };
  xlStyle?: { [key: string]: unknown };
};

export const ResponsiveBox: React.FC<ResponsiveBoxProps> = (props) => {
  const {
    Element = Box,
    elementProps,
    display = 'block',
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
        {...elementProps}
        sx={xsStyle}
        display={{
          xs: display,
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        {...elementProps}
        sx={{ ...xsStyle, ...smStyle }}
        display={{
          xs: 'none',
          sm: display,
          md: 'none',
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        {...elementProps}
        sx={{ ...xsStyle, ...smStyle, ...mdStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: display,
          lg: 'none',
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        {...elementProps}
        sx={{ ...xsStyle, ...smStyle, ...mdStyle, ...lgStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: display,
          xl: 'none',
        }}
      >
        {children}
      </Element>
      <Element
        {...elementProps}
        sx={{ ...xsStyle, ...smStyle, ...mdStyle, ...lgStyle, ...xlStyle }}
        display={{
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'none',
          xl: display,
        }}
      >
        {children}
      </Element>
    </>
  );
};
