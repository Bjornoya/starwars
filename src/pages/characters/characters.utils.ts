import { TColumn } from '../../config/interface';

export const columns: TColumn[] = [
  { id: 'name', label: 'Name', width: 300, align: 'left' },
  { id: 'height', label: 'Height', width: 150, align: 'center' },
  { id: 'mass', label: 'Mass', width: 150, align: 'center' },
  { id: 'hair_color', label: 'Hair color', width: 250, align: 'left' },
  { id: 'skin_color', label: 'Skin color', width: 250, align: 'left' },
  { id: 'eye_color', label: 'Eye color', width: 150, align: 'left' },
  { id: 'birth_year', label: 'Year of birth', width: 150, align: 'left' },
  { id: 'gender', label: 'Gender', width: 150, align: 'left' },
];

export const initialTableState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};
