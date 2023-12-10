import React, { Suspense } from 'react';
import _omit from 'lodash.omit';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import Layout from '../../lib/layout/layout.cmp';
import { initialCharacterState } from './character.utils';
import { getCharacter } from '../../config/api';
import Planet from './components/planet.cmp';
import Loader from '../../lib/loader/loader.cmp';
import CharacterForm from './components/characterForm.cmp';

function CharacterPage() {
  const { id } = useParams();
  const { data = initialCharacterState } = useQuery({
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
    </Layout>
  );
}

export default CharacterPage;
