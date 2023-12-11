import React, { Suspense } from 'react';
import _omit from 'lodash.omit';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import Layout from '../../lib/layout/layout.cmp';
import { initialCharacterState } from './character.utils';
import { getCharacter } from '../../config/api';
import Planet from './components/planet.cmp';
import Loader from '../../lib/loader/loader.cmp';
import CharacterForm from './components/characterForm.cmp';
import Films from './components/films.cmp';

function CharacterPage() {
  const { id } = useParams();
  const { data = initialCharacterState } = useSuspenseQuery({
    queryKey: ['character', [id]],
    queryFn: () => getCharacter(id),
  });

  const formData = _omit(data, ['homeworld', 'films', 'species', 'vehicles', 'starships', 'url']);

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '24px 0' }}>
        <CharacterForm initialState={formData} />
        <Paper variant="outlined" sx={{ width: 700, height: 350 }}>
          <Suspense fallback={<Loader />}>
            <Planet url={data.homeworld} />
          </Suspense>
        </Paper>
      </Box>
      <Box sx={{ width: 1500, height: 'auto' }}>
        <Suspense fallback={<Loader />}>
          <Films urls={data.films} />
        </Suspense>
      </Box>
    </Layout>
  );
}

export default CharacterPage;
