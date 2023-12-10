import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Layout from '../../lib/layout/layout.cmp';
import { initialCharacterState } from './character.utils';
import { getCharacter } from '../../config/api';
import Planet from './components/planet.cmp';

function CharacterPage() {
  const { id } = useParams();
  const { data = initialCharacterState } = useQuery({
    queryKey: ['character', [id]],
    queryFn: () => getCharacter(id),
  });

  console.log(data);
  return (
    <Layout>
      <div>Character PAGE</div>
      <Planet url={data.homeworld} />
    </Layout>
  );
}

export default CharacterPage;
