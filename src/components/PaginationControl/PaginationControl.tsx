import {
  ChangeEvent,
  FunctionComponent,
  JSX,
  useState,
  KeyboardEvent,
  useEffect,
} from 'react';

import { Button, TextField } from '@mui/material';

import { IControlProps } from '../../common/types';
import { useTagStore } from '../../store/store';

import './PaginationControl.css';

export const PaginationControl: FunctionComponent<IControlProps> = (
  props
): JSX.Element => {
  const [tagsPerPage, setTagsPerPage] = useState<number>(10);
  const [helperText, setHelperText] = useState<string>('');

  const pageSize = useTagStore((state: any) => state.pageSize);
  const updatePageSize = useTagStore((state: any) => state.updatePageSize);

  const handleButtonClick = () => {
    if (!Number.isInteger(tagsPerPage)) {
      setHelperText('Podaj poprawną liczbę');
    } else if (tagsPerPage > 0 && tagsPerPage < 101) {
      updatePageSize(tagsPerPage);
    } else {
      setHelperText('Podaj liczbę od 1 do 100');
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === 'Enter') handleButtonClick();
  };

  const handleTagsNumberChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    let num = Number(event.target.value);
    if (!Number.isNaN(num)) {
      if (helperText !== '') setHelperText('');

      if (tagsPerPage === 0 && num > 9) num /= 10;
      setTagsPerPage(num);
    }
  };

  const checkInputValue = (): void => {
    if (tagsPerPage !== pageSize) setTagsPerPage(pageSize);
  };

  useEffect(() => {
    document.addEventListener('page-change', checkInputValue);
    return () => {
      document.removeEventListener('page-change', checkInputValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagsPerPage, pageSize]);

  return (
    <div className="pagination-control">
      {/* Unstable text field with number type, needs to be replaced with something better */}
      <TextField
        disabled={props.disabled}
        error={!!helperText}
        label="Ilość elementów na stronie"
        value={tagsPerPage}
        onChange={handleTagsNumberChange}
        size="small"
        id="pagination-input"
        onKeyUp={handleKeyPress}
      />
      <Button
        disabled={props.disabled}
        variant="contained"
        onClick={handleButtonClick}
        id="pagination-button"
        style={{ backgroundColor: props.disabled ? '#d4d4d4' : '#5dc267' }}
      >
        Wyświetl
      </Button>
    </div>
  );
};
