import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import kitchen from './imgs/kitchen.jpeg';
import cabinet from './imgs/cabinet.jpeg';
import flowers from './imgs/flowers.jpeg';
import { createTheme, ThemeProvider } from '@mui/material';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
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

function ProductValues(props) {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{ mt: 10, mb: 5, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ThemeProvider theme={theme}>
                <Box
                  component="img"
                  src={cabinet}
                  alt="cabinet"
                  sx={imgStyle}
                />
              </ThemeProvider>
              <Typography variant="h6" sx={{ my: 5 }}>
                30+ Years of Experience
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {'We know what it takes to make your home beautiful,'}

                {' and we guarentee your satisfaction.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ThemeProvider theme={theme}>
                <Box
                  component="img"
                  src={flowers}
                  alt="flowers"
                  sx={imgStyle}
                />
              </ThemeProvider>
              <Typography variant="h6" sx={{ my: 5 }}>
                Sophisticated Design
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {'Bringing your ideas to life is our passion.'}
                {' Let us help create your dream home.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <ThemeProvider theme={theme}>
                <Box
                  component="img"
                  src={kitchen}
                  alt="kitchen"
                  sx={imgStyle}
                />
              </ThemeProvider>
              <Typography variant="h6" sx={{ my: 5 }}>
                Fair Pricing
              </Typography>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {'We believe in delivering the best possible service'}
                {' for every budget.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
