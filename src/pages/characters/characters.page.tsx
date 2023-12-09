import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Layout from '../../lib/layout/layout.cmp';
import CharactersTable from './components/charactersTable/charactersTable.cmp';
import { columns, initialTableState } from './characters.utils';
import { getCharacters } from '../../config/api';

function CharactersPage() {
  const { page = 1 } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page);
  const pageIndex = Number(page) - 1;

  const {
    data = initialTableState,
    isInitialLoading,
    isFetching,
  } = useQuery({
    queryKey: ['characters', [currentPage]],
    queryFn: () => getCharacters(currentPage),
    placeholderData: keepPreviousData,
  });

  const onPageChange = (newPage: number) =>
    newPage === 1 ? navigate('/characters/') : navigate(`/characters/${newPage}`);

  return (
    <Layout>
      <CharactersTable
        columns={columns}
        rows={data.results}
        count={data.count}
        page={pageIndex}
        onPageChange={onPageChange}
        isInitialLoading={isInitialLoading}
        isFetching={isFetching}
      />
    </Layout>
  );
}

export default CharactersPage;
