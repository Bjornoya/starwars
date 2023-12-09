import { TableCell, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import { TColumn, TRow } from '../../../../config/interface';

interface IProps {
  row: TRow;
  columns: TColumn[];
  onRowClick: (id: string) => void;
}

function CustomTableRow({ row, columns, onRowClick }: IProps) {
  return (
    <StyledTableRow key={row.name} onClick={onRowClick}>
      {columns.map((column) => (
        <TableCell key={column.id} style={{ width: column.width }} align={column.align}>
          {row[column.id]}
        </TableCell>
      ))}
    </StyledTableRow>
  );
}

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
  transition: ease-in-out 0.1s;
  &:hover {
    background: #f5f5f5;
  }
`;

export default CustomTableRow;
