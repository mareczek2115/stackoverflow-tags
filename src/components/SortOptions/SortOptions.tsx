import { FunctionComponent, JSX } from 'react';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { IControlProps } from '../../common/types';
import { useTagStore } from '../../store/store';

import './SortOptions.css';

export const SortOptions: FunctionComponent<IControlProps> = (
  props
): JSX.Element => {
  const sortBy = useTagStore((state: any) => state.sortBy);
  const orderBy = useTagStore((state: any) => state.orderBy);

  const updateSorting = useTagStore((state: any) => state.updateSorting);
  const updateOrder = useTagStore((state: any) => state.updateOrder);

  const setSorting = (event: SelectChangeEvent): void => {
    updateSorting(event.target.value as string);
  };

  const setOrder = (event: SelectChangeEvent): void => {
    updateOrder(event.target.value as string);
  };

  return (
    <div className="sort-options">
      <FormControl size="small" disabled={props.disabled}>
        <InputLabel>Sortuj według</InputLabel>
        <Select
          label="Sortuj według"
          value={sortBy}
          onChange={setSorting}
          id="sort-column"
        >
          <MenuItem value="name">Tagu</MenuItem>
          <MenuItem value="popular">Ilości postów</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" disabled={props.disabled}>
        <InputLabel>Kolejność</InputLabel>
        <Select
          label="Kolejność"
          value={orderBy}
          onChange={setOrder}
          id="sort-order"
        >
          <MenuItem value="asc">Rosnąco</MenuItem>
          <MenuItem value="desc">Malejąco</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
