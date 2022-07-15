import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import val from './imgs/val.jpeg';
import tile from './imgs/tile.jpeg';
import stripes from './imgs/stripes.webp';
import { createTheme, ThemeProvider } from '@mui/material';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'primary.main',
  fontWeight: 'medium',
};

const imgStyle = {
  my: 2,
  height: 300,
  width: {
    xxs: '70%',
    xs: '80%',
    sm: '50%',
    md: '120%',
    lg: '120%',
    xl: '120%',
  },
  outline: '1px solid white',
  outlineOffset: '-4px',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

function Process(props) {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', backgroundColor: 'white', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 5,
          mb: 10,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 5, color: 'primary.main' }}
        >
          How We Work
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <ThemeProvider theme={theme}>
                  <Box component="img" src={val} alt="val" sx={imgStyle} />
                </ThemeProvider>
                <Typography variant="h5" align="center">
                  Free Initial Consultation
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box component="img" src={tile} alt="tile" sx={imgStyle} />
                <Typography variant="h5" align="center">
                  Choose a Design Gameplan
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src={stripes}
                  alt="stripes"
                  sx={imgStyle}
                />
                <Typography variant="h5" align="center">
                  Decorate!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default Process;
