import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
