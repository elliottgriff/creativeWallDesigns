import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material';
import { IconButton } from '@mui/material';
import { MailOutlineRounded } from '@mui/icons-material';
import { LocalPhoneRounded } from '@mui/icons-material';

export default function CWDAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: '4rem',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            variant="h6"
            underline="none"
            href="#home"
            sx={{
              color: 'white',
              fontFamily: "'Raleway', sans-serif",
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            C W D
          </IconButton>
          <Box sx={{ maxwidth: '50px' }}>
            <IconButton
              variant="h6"
              underline="none"
              href="tel:2036850216"
              sx={{
                color: 'white',
                fontFamily: "'Raleway', sans-serif",
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <LocalPhoneRounded />
            </IconButton>
            <IconButton
              variant="h6"
              underline="none"
              href="#contact"
              sx={{
                color: 'white',
                fontFamily: "'Raleway', sans-serif",
                '&:hover': {
                  color: 'primary.light',
                },
              }}
            >
              <MailOutlineRounded />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
