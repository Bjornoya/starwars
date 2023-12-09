import React from 'react';
import { Box, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

interface IProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
}

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }: IProps) {
  const pageNumber = page + 1; // the page used here as index, that's why we need to increment it here
  const onFirstPageBtnClick = () => onPageChange(1);

  const onBackBtnClick = () => onPageChange(pageNumber - 1);

  const onNextBtnClick = () => onPageChange(pageNumber + 1);

  const onLastPageBtnClick = () => onPageChange(Math.max(0, Math.ceil(count / rowsPerPage)));

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={onFirstPageBtnClick} disabled={page === 0} aria-label="first page">
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={onBackBtnClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton onClick={onNextBtnClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={onLastPageBtnClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

export default TablePaginationActions;
