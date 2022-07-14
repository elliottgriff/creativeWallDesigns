import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Image } from 'react-bootstrap';
import { createTheme, ThemeProvider } from '@mui/system';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/394198127826427904/width/1024.webp',
    title: 'Wallpaper',
    width: '40%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/405817683863928840/width/1024.webp',
    title: 'Kitchen',
    width: '20%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/405817684301725702/width/1024.webp',
    title: 'Bathroom',
    width: '40%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/353289184859267092/width/1024.webp',
    title: 'Bedroom',
    width: '38%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/333404451881361532/width/1920.webp',
    title: 'Lighting',
    width: '38%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/352349425107804182/width/1024.webp',
    title: 'Decorating',
    width: '24%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/361991502914682884/width/1920.webp',
    title: 'Remodeling',
    width: '40%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/389368584988213260/width/1920.webp',
    title: 'Carpet',
    width: '20%',
  },
  {
    url: 'https://production-next-images-cdn.thumbtack.com/i/389368584291729411/width/1920.webp',
    title: 'Design',
    width: '40%',
  },
];

function BasicModal(props) {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{ height: '70px', width: '180px' }}
        onClick={handleOpen}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: {
                xxs: '50%',
                xs: '70%',
                sm: '50%',
                md: '35%',
                lg: '35%',
                xl: '35%',
              },
              bgcolor: 'background.paper',
              boxShadow: 24,
            }}
          >
            <Image
              style={{ width: '100%' }}
              src={props.url}
              alt={props.title}
            ></Image>
          </Box>
        </ThemeProvider>
      </Modal>
    </div>
  );
}

export default function ImageBoxes() {
  return (
    <div style={{ backgroundColor: '#C8E3D4' }}>
      <Container component="section" sx={{ mt: 4, mb: 4, py: '5rem' }}>
        <Typography
          variant="h2"
          marked="center"
          align="center"
          component="h2"
          sx={{ color: 'white' }}
        >
          For all your Decorating Needs
        </Typography>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
              <BasicModal url={image.url} alt={image.title} />
            </ImageIconButton>
          ))}
        </Box>
      </Container>
    </div>
  );
}
