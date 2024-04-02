import { FunctionComponent, JSX } from 'react';

import {
  Table as MaterialTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { ITag } from '../../common/types';
import { useTempStore } from '../../store/store';

import './Table.css';

export const Table: FunctionComponent<{
  tags?: Array<ITag>;
}> = (props): JSX.Element => {
  const tags = useTempStore((state: any) => state.tags);

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <MaterialTable>
          <TableHead>
            <TableRow style={{ backgroundColor: '#5dc267' }}>
              <TableCell
                style={{ color: 'white' }}
                className="table-header"
                size="small"
              >
                Tag
              </TableCell>
              <TableCell
                style={{ color: 'white' }}
                className="table-header"
                size="small"
              >
                Ilość postów
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tags
              ? props.tags.map((tag: ITag, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{tag.name}</TableCell>
                      <TableCell>{tag.count.toLocaleString()}</TableCell>
                    </TableRow>
                  );
                })
              : tags.map((tag: ITag, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{tag.name}</TableCell>
                      <TableCell>{tag.count.toLocaleString()}</TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </div>
  );
};
