import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function CWDAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        enableColorOnDark="true"
        color="primary"
        sx={{ height: '8rem', justifyContent: 'center' }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}
          >
            Creative Wall Designs
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
