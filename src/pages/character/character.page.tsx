import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import Layout from '../../lib/layout/layout.cmp';
import { initialCharacterState } from './character.utils';
import { getCharacter } from '../../config/api';
import Planet from './components/planet.cmp';
import Loader from '../../lib/loader/loader.cmp';

function CharacterPage() {
  const { id } = useParams();
  const { data = initialCharacterState } = useQuery({
    queryKey: ['character', [id]],
    queryFn: () => getCharacter(id),
  });

  console.log(data);
  return (
    <Layout>
      <Box>Character PAGE</Box>
      <Paper sx={{ width: 600, height: 400 }}>
        <Suspense fallback={<Loader />}>
          <Planet url={data.homeworld} />
        </Suspense>
      </Paper>
    </Layout>
  );
}

export default CharacterPage;
