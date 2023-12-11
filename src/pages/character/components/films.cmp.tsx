import React from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import { Stack, Typography } from '@mui/material';
import Film from './film.cmp';
import { getFilm } from '../../../config/api';
import { INormalizedFilm } from '../../../config/interface';

function Films({ urls }: { urls: string[] }) {
  const userQueries = useSuspenseQueries<INormalizedFilm[]>({
    queries: urls.map((url) => {
      return {
        queryKey: ['film', url],
        queryFn: () => getFilm(url),
      };
    }),
  });

  return (
    <>
      <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
        Films
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap="24px">
        {userQueries.map((query) => (
          <Film film={query.data} key={query.data.episode_id} />
        ))}
      </Stack>
    </>
  );
}

export default Films;
