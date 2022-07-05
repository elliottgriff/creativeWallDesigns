import * as React from 'react';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import emailjs from 'emailjs-com';
import kitchenContact from './imgs/kitchenContact.jpeg';

function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);

    emailjs.sendForm(
      'service_0znpeoq',
      'template_l7rug2j',
      form.current,
      'D3Z2xi7rCQisabcxd'
    );

    event.target.reset();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="contact">
      <Container component="section" sx={{ py: 10, display: 'flex' }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'warning.main',
                py: 6,
                px: 3,
              }}
            >
              <Box
                ref={form}
                component="form"
                onSubmit={handleSubmit}
                sx={{ maxWidth: 400 }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{ textAlign: 'center' }}
                >
                  Get in Touch
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Send us a Message!
                </Typography>
                <TextField
                  noBorder
                  placeholder="Your Name"
                  variant="standard"
                  required
                  sx={{ width: '100%', mt: 3, mb: 2 }}
                />
                <TextField
                  noBorder
                  placeholder="Email"
                  variant="standard"
                  type="email"
                  required
                  sx={{ width: '100%', mt: 1, mb: 2 }}
                />
                <TextField
                  noBorder
                  multiline
                  required
                  maxRows={4}
                  placeholder="Message"
                  variant="standard"
                  sx={{ width: '100%', mt: 1, mb: 2 }}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{ width: '100%', borderRadius: '5px' }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
          >
            <Box
              component="img"
              src={kitchenContact}
              alt="call to action"
              sx={{
                position: 'absolute',
                top: -28,
                left: -28,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: 600,
              }}
            />
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          closeFunc={handleClose}
          message="Thanks! We will get back to you soon."
        />
      </Container>
    </section>
  );
}

export default Contact;
