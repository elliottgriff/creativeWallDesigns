import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './imgs/logo.png';
import { createTheme, ThemeProvider } from '@mui/material';

const Testimonials = () => {
  const testimonial = [
    {
      content:
        '"Creative Wall Designs was amazing from start to finish! They answered all of my questions in a very timely manner. Robert did an amazing job wallpapering our accent wall. He was very prompt and professional. We love our wall!"',
      author: 'Susan B.',
    },
    {
      content:
        '"I originally contacted Valerie for a wallpaper quote, but I realized I made a mistake with the paint color of my living room, so she came over and knew exactly what color the room needed. They were a pleasure to work with!"',
      author: 'Monica M.',
    },
    {
      content:
        '"The work was beautiful, we received design help, they were so professional, and were amazing to work with! We could not have asked for a better experience!"',
      author: 'Debra M.',
    },
    {
      content:
        '"Quick to respond, level-headed enough to ask the detailed questions necessary to complete the job for our budding business. Would hire again for not only painting, but would consider for other jobs as well. Thank you!"',
      author: 'Angela M.',
    },
    {
      content:
        '"This is a wonderful company to work with. They offer thoughtful suggestions, use only top qualities materials and they did a fantastic job."',
      author: 'Brian H.',
    },
    {
      content:
        'I" cannot say enough good things about working with these people. The job they did was absolutely amazing and they were a dream to work with."',
      author: 'Linda M.',
    },
    {
      content:
        '"Valerie and Robert were a delight to work with in every way! I would hire them again in a heartbeat and would advise anyone else to seek them out."',
      author: 'Donna B.',
    },
  ];

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

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        sx={{
          backgroundColor: '#87AAAA',
          height: {
            xxs: '50vh',
            xs: '75vh',
            sm: '80vh',
            md: '80vh',
            lg: '75vh',
            xl: '90vh',
          },
        }}
      >
        <Carousel
          fade
          style={{
            margin: '2rem',
            top: '5%',
            height: 'auto',
          }}
        >
          {testimonial.map((t, index) => {
            return (
              <Carousel.Item>
                <Box
                  sx={{
                    backgroundColor: '#87AAAA',
                    height: {
                      xxs: '30rem',
                      xs: '26rem',
                      sm: '22rem',
                      md: '20rem',
                      lg: '14rem',
                      xl: '20rem',
                    },
                    borderRadius: '5rem',
                  }}
                >
                  <h3 style={{ textAlign: 'center', fontSize: '65px' }}>
                    {t.author}
                  </h3>
                  <Carousel.Caption
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translate(0, -50%)',
                    }}
                  >
                    <h5
                      style={{
                        maxHeight: '100%',
                        fontSize: '120%',
                      }}
                    >
                      {t.content}
                    </h5>
                  </Carousel.Caption>
                </Box>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <img
          style={{
            display: 'block',
            width: '20%',
            margin: 'auto',
            borderRadius: 5,
          }}
          src={logo}
          alt="logo"
        />
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
