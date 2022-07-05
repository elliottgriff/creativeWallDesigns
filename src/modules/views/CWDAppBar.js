import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import './CWDAppBar.module.css';

export default function CWDAppBar() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ height: '4rem', justifyContent: 'center' }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box>
          <Link
            variant="h6"
            underline="none"
            href="#home"
            sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}
          >
            Creative Wall Designs
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
