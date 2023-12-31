import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress } from '@mui/material';
import TablePaginationActions from './tablePaginationActions.cmp';
import CustomTableRow from './tableRow.cmp';
import TableSkeletonRow from './tableSkeletonRow.cmp';
import { TColumn, TRow } from '../../../../config/interface';

const ROWS_PER_PAGE = 10;

interface IProps {
  columns: TColumn[];
  rows: TRow[];
  count: number;
  page: number;
  onPageChange: (newPage: number) => void;
  isInitialLoading: boolean;
  isFetching: boolean;
}

function CharactersTable({ columns, rows, count, page, onPageChange, isInitialLoading, isFetching }: IProps) {
  const navigate = useNavigate();
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * ROWS_PER_PAGE - count) : 0;

  // The API doesn't provide an id, so I parse it from the url
  const onRowClick = (url: string) => {
    const parsedNumbers = url.match(/\d+/);
    if (parsedNumbers) {
      const [id] = parsedNumbers;
      navigate(`/character/${id}`);
    } else {
      // Throw an error here!
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, position: 'relative' }} aria-label="custom pagination table">
        {isFetching && !isInitialLoading && (
          <Box sx={{ width: '100%', position: 'absolute' }}>
            <LinearProgress />
          </Box>
        )}
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{ width: column.width, fontWeight: '600' }} align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isInitialLoading ? (
            <TableSkeletonRow rowsNum={10} />
          ) : (
            <>
              {rows.map((row) => (
                <CustomTableRow
                  key={row.url}
                  row={row}
                  columns={columns}
                  onRowClick={() => onRowClick(row.url as string)}
                />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </>
          )}
        </TableBody>
        <TableFooter sx={{ '.MuiTablePagination-spacer': { display: 'none' } }}>
          <TableRow>
            <TablePagination
              colSpan={3}
              count={count}
              rowsPerPage={ROWS_PER_PAGE}
              rowsPerPageOptions={[ROWS_PER_PAGE]}
              page={ROWS_PER_PAGE >= count ? 0 : page}
              onPageChange={onPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default CharactersTable;
