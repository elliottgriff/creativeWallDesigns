import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './imgs/logo.png';

const Testimonials = () => {
  const testimonial = [
    {
      content:
        'Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.',
      author: 'Sarah M., Director of Events',
    },
    {
      content:
        'I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.',
      author: 'Sarah M., CCHS Foundation',
    },
    {
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: 'Alexander B., Pan-Mass Challenge',
    },
    {
      content:
        'MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.',
      author: 'Amy C., One Less Orphan Fund',
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
                  backgroundColor: 'primary.light',
                  height: 350,
                  borderRadius: '5rem',
                }}
              >
                <img
                  style={{
                    width: 200,
                    margin: 0,
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    msTransform: 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: 5,
                  }}
                  src={logo}
                  alt={index}
                />
                <Carousel.Caption>
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
