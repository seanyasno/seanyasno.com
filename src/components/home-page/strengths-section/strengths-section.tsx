import { theme } from '@/consts/index';
import { Typography, Grid, Box, Card } from '@mui/material';
import React, { ReactElement } from 'react';

type ItemProps = {
  icon?: ReactElement;
  title: string;
};

const Item: React.FC<ItemProps> = (props) => {
  const { icon, title } = props;

  return (
    <Card
      sx={{
        borderRadius: '15px',
        padding: '20px 30px',
        display: 'flex',
        alignItems: 'center',
      }}
      elevation={3}
    >
      <Box
        sx={{ color: theme.palette.primary.main, marginRight: '30px' }}
        display={{ xs: 'none', lg: 'block' }}
      >
        {icon}
      </Box>
      <Box>
        <Box
          sx={{
            color: theme.palette.primary.main,
            alignItems: 'center',
          }}
          display={{ xs: 'flex', lg: 'none' }}
        >
          <Box
            sx={{ marginRight: '10px' }}
            display={{ xs: 'none', sm: 'block' }}
          >
            {icon}
          </Box>
          <Typography variant='h5'>{title}</Typography>
        </Box>
        <Box display={{ xs: 'none', lg: 'block' }}>
          <Typography variant='h5'>{title}</Typography>
        </Box>
        {props.children}
      </Box>
    </Card>
  );
};

type StrengthsSectionProps = {
  items: { icon: ReactElement; title: string; content: ReactElement }[];
};

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({
  items,
}) => {
  return (
    <>
      <Typography variant='h3' sx={{ marginBottom: '30px' }}>
        My Best Strengths
      </Typography>
      <Grid container spacing={4}>
        {items.map(({ icon, title, content }, index) => (
          <Grid key={index} item xs={12} lg={6}>
            <Item title={title} icon={icon}>
              {content}
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
