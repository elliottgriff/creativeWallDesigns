import { Box } from '@mui/material';
import React from 'react';
import Typography from '../components/Typography';

const Bio = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: '30px',
          textAlign: 'center',
          width: '80%',
          margin: '3rem auto 0 auto',
        }}
      ></Typography>
    </Box>
  );
};

export default Bio;
