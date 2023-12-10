import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Box, TextField } from '@mui/material';
import Layout from '../../lib/layout/layout.cmp';
import CharactersTable from './components/charactersTable/charactersTable.cmp';
import { columns, initialTableState } from './characters.utils';
import { getCharacters } from '../../config/api';

function CharactersPage() {
  const [search, setSearch] = useState('');
  const { page = 1 } = useParams();
  const navigate = useNavigate();
  const pageIndex = Number(page) - 1;
  const query = search ? `?search=${search}&page=${page}` : `?page=${page}`; // Push it to the url in the future

  const {
    data = initialTableState,
    isInitialLoading,
    isFetching,
  } = useQuery({
    queryKey: ['characters', [query]],
    queryFn: () => getCharacters(query),
    placeholderData: keepPreviousData,
  });

  const onPageChange = (newPage: number) => {
    const url = newPage === 1 ? '/characters/' : `/characters/${newPage}`;
    navigate(url);
  };

  const onSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    navigate('/characters/');
  };

  return (
    <Layout>
      <Box sx={{ margin: '24px 0' }}>
        <TextField
          onChange={onSearch}
          sx={{ width: '40%' }}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
      </Box>
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
