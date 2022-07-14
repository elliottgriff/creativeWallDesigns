import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './imgs/logo.png';

const Testimonials = () => {
  const testimonial = [
    {
      content:
        'Creative Wall Design was amazing from start to finish! They answered all of my questions in a very timely manner. Robert did an amazing job wallpapering our accent wall. He was very prompt and professional. We love our wall!',
      author: 'Susan B.',
    },
    {
      content:
        'I originally contacted Valerie for a wallpaper quote, but I realized I made a mistake with the paint color of my living room, so she came over and knew exactly what color the room needed. They were a pleasure to work with!',
      author: 'Monica M.',
    },
    {
      content:
        'The work was beautiful, we received design help, they were so professional, and were amazing to work with! We could not have asked for a better experience!',
      author: 'Debra M.',
    },
    {
      content:
        'Quick to respond, level-headed enough to ask the detailed questions necessary to complete the job for our budding business. Would hire again for not only painting, but would consider for other jobs as well. Thank you!',
      author: 'Angela M.',
    },
    {
      content:
        'This is a wonderful company to work with. They offer thoughtful suggestions, use only top qualities materials and they did a fantastic job.',
      author: 'Brian H.',
    },
    {
      content:
        'I cannot say enough good things about working with these people. The job they did was absolutely amazing and they were a dream to work with.',
      author: 'Linda M.',
    },
    {
      content:
        'Valerie and Robert were a delight to work with in every way! I would hire them again in a heartbeat and would advise anyone else to seek the out.',
      author: 'Donna B.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#87AAAA', height: '80vh' }}>
      <Carousel
        fade
        style={{
          margin: '2rem',
          top: '50%',
          msTransform: 'translateY(-50%)',
          transform: 'translateY(-50%)',
        }}
      >
        {testimonial.map((t, index) => {
          return (
            <Carousel.Item>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  height: 400,
                  borderRadius: '5rem',
                }}
              >
                <img
                  style={{
                    width: 200,
                    margin: 0,
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    msTransform: 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: 5,
                  }}
                  src={logo}
                  alt={index}
                />
                <Carousel.Caption style={{ maxHeight: '65%' }}>
                  <h3>{t.author}</h3>
                  <p>{t.content}</p>
                </Carousel.Caption>
              </Box>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
