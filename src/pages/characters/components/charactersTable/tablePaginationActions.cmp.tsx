import React from 'react';
import { Box, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

type TMouseEvent = React.MouseEvent<HTMLButtonElement>;

interface IProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: TMouseEvent, newPage: number) => void;
}

function TablePaginationActions({ count = 0, page = 0, rowsPerPage = 10, onPageChange }: IProps) {
  const onFirstPageBtnClick = (event: TMouseEvent) => onPageChange(event, 0);

  const onBackBtnClick = (event: TMouseEvent) => onPageChange(event, page - 1);

  const onNextBtnClick = (event: TMouseEvent) => onPageChange(event, page + 1);

  const onLastPageBtnClick = (event: TMouseEvent) =>
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

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
