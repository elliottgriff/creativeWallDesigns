import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://imgs.search.brave.com/PEMlUTJBxoT8E5qr1qOEOuuh3BfUeAqeoceXFd4dKPQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJvbXRoZWZsb29y/c3VwLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC80/NjQ4NzU3OF9MLmpw/Zw';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Home
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Over 20 Years of Interior Design
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Reach Out
      </Button>
    </ProductHeroLayout>
  );
}
