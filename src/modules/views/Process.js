import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import val from './imgs/val.jpeg';
import tile from './imgs/tile.jpeg';
import stripes from './imgs/stripes.webp';

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

const image = {
  height: '20rem',
  my: 4,
};

function Process() {
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
                <Box component="img" src={val} alt="val" sx={image} />
                <Typography variant="h5" align="center">
                  Free Initial Consultation
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box component="img" src={tile} alt="tile" sx={image} />
                <Typography variant="h5" align="center">
                  Choose a Design Gameplan
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box component="img" src={stripes} alt="stripes" sx={image} />
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
