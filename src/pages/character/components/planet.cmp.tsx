import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Box, TextField, Typography } from '@mui/material';
import { getPlanet } from '../../../config/api';
import { PLANET_LABELS } from '../character.utils';

function Planet({ url }: { url: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ['planet', [url]],
    queryFn: () => getPlanet(url),
  });

  return (
    <>
      <Typography sx={{ padding: '12px 0 0 24px' }} variant="h6" component="div">
        Homeworld
      </Typography>
      <Box sx={{ padding: '0 12px' }}>
        {Object.keys(data).map((key) => (
          <TextField
            id="outlined-read-only-input"
            label={PLANET_LABELS[key]}
            value={data[key]}
            variant="standard"
            size="small"
            InputProps={{
              readOnly: true,
            }}
            sx={{ margin: '12px' }}
          />
        ))}
      </Box>
    </>
  );
}

export default Planet;
