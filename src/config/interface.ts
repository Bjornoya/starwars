export type TColumn = {
  id: string;
  label: string;
  width: number;
  align: 'left' | 'right' | 'center' | 'justify' | 'inherit';
};

export type TRow = {
  [key: string]: string | number | { [key: string]: string | number };
};

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IPersons {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}
