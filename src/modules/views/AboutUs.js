import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import kitchen from './imgs/kitchen.jpeg';
import tile from './imgs/tile.jpeg';
import couch from './imgs/couch.webp';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
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
              <Box
                component="img"
                src={couch}
                alt="couch"
                sx={{ height: 300 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                30+ Years of Experience
              </Typography>
              <Typography variant="h5">
                {'We know what it takes to make your home beautiful,'}

                {' and we guarentee your satisfaction.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" src={tile} alt="tile" sx={{ height: 300 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Sophisticated Design
              </Typography>
              <Typography variant="h5">
                {'Bringing your ideas to life is our passion.'}
                {' Let us help create your dream home.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={kitchen}
                alt="kitchen"
                sx={{ height: 300 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Fair Pricing
              </Typography>
              <Typography variant="h5">
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
