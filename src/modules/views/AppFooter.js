import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NoEncryption } from '@mui/icons-material';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      Creative Wall Designs LLC
      {' ' + new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  textDecoration: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
  '&:hover': {
    color: 'warning.dark',
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'inline' }}>
        <div>
          <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="a"
              href="https://instagram.com/creativewalldesignsct/"
              target="_blank"
              rel="noopener noreferrer"
              sx={iconStyle}
            >
              <h3>Instagram </h3>
              <InstagramIcon />
            </Box>
          </Grid>
        </div>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
          <Copyright />
        </Grid>
      </Container>
    </Typography>
  );
}
