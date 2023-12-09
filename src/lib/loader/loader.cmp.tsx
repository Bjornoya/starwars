import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box sx={{ display: 'flex', alignCenter: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
