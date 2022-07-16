import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

export default function ProductHero(props) {
  const backgroundImage =
    'https://imgs.search.brave.com/PEMlUTJBxoT8E5qr1qOEOuuh3BfUeAqeoceXFd4dKPQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJvbXRoZWZsb29y/c3VwLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC80/NjQ4NzU3OF9MLmpw/Zw';

  return (
    <section id="home">
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
        }}
      >
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          sx={{ paddingTop: '6rem', fontSize: '70px' }}
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
        >
          Creative Wall Designs
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{
            mb: 0,
            mt: 5,
            fontSize: {
              xxs: '20px',
              xs: '20px',
              sm: '25px',
              md: '25px',
              lg: '25px',
              xl: '25px',
            },
          }}
        >
          Serving Fairfield and New Haven counties for over 30 years.
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{
            mb: 4,
            mt: 0,
            fontSize: {
              xxs: '20px',
              xs: '20px',
              sm: '25px',
              md: '25px',
              lg: '25px',
              xl: '25px',
            },
          }}
        >
          We offer free estimates, color consultation and design services!
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="#contact"
          sx={{
            minWidth: 200,
            color: 'white',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: 'primary.light',
              color: 'white',
            },
          }}
        >
          Reach Out
        </Button>
      </ProductHeroLayout>
    </section>
  );
}
