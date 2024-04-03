import { FunctionComponent, JSX, useEffect, useState } from 'react';

import { CircularProgress, Divider, Fab, Pagination } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

import { PaginationControl } from '../PaginationControl/PaginationControl';
import { SortOptions } from '../SortOptions/SortOptions';
import { Table } from '../Table/Table';
import { Error } from '../Error/Error';

import { IApiRequest, IApiResponse, ITag } from '../../common/types';
import { fetchTags, triggerEvent } from '../../common/utils';
import { useTagStore } from '../../store/store';

import './Wrapper.css';

export const Wrapper: FunctionComponent<{
  docs?: boolean;
  tags?: Array<ITag>;
}> = (params): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [visibility, setVisibility] = useState<boolean>(false);

  const tags = useTagStore((state: any) => state.tags);
  const updateTags = useTagStore((state: any) => state.updateTags);

  const page = useTagStore((state: any) => state.page);
  const updatePage = useTagStore((state: any) => state.updatePage);

  const pageSize = useTagStore((state: any) => state.pageSize);

  const sortBy = useTagStore((state: any) => state.sortBy);
  const orderBy = useTagStore((state: any) => state.orderBy);

  const setTableData = async (params: IApiRequest) => {
    updateTags([]);
    setError('');

    let dataRequest: IApiResponse | string = await fetchTags(params);

    setIsLoading(false);

    if (typeof dataRequest === 'string') {
      if (dataRequest === 'TypeError')
        setError(
          'Wystąpił problem podczas ładowania danych. Spróbuj ponownie za chwilę.'
        );
      else
        setError('Przekroczono czas połączenia. Spróbuj ponownie za chwilę.');
    } else {
      let responseData: IApiResponse = dataRequest;
      if (responseData.error_id) {
        setError(
          `Błąd ${responseData.error_id}: ${responseData.error_name.split('_').join(' ')}`
        );
      } else {
        updateTags(responseData.items);
      }
    }
  };

  const handlePageChange = (_: any, newPage: number): void => {
    triggerEvent('page-change');
    updatePage(newPage);
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVisibility = (): void => {
    const topScroll = document.documentElement.scrollTop;
    if (topScroll > 30) setVisibility(true);
    else setVisibility(false);
  };
  window.addEventListener('scroll', toggleVisibility);

  useEffect(() => {
    setIsLoading(true);
    if (!params.docs) {
      setTableData({
        page: page,
        page_size: pageSize,
        sort: sortBy,
        order: orderBy,
      });
    } else if (params.tags) {
      setIsLoading(false);
      updateTags(params.tags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, sortBy, orderBy]);

  return (
    <div className="container">
      <div className="upper-options">
        <PaginationControl disabled={!!isLoading} />
        <Divider orientation="vertical" />
        <SortOptions disabled={!!isLoading} />
      </div>
      <div
        className="table-container"
        style={{
          justifyContent: isLoading || !!error ? 'center' : 'flex-start',
          height: isLoading || !!error || tags.length < 9 ? '70vh' : 'auto',
        }}
      >
        {isLoading ? (
          <CircularProgress size={55} style={{ alignSelf: 'center' }} />
        ) : tags && tags.length > 0 ? (
          <Table />
        ) : (
          <Error message={error} />
        )}
      </div>
      <div className="paging">
        <Pagination
          disabled={!!isLoading}
          count={25}
          siblingCount={2}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          size={window.innerWidth < 500 ? 'small' : 'medium'}
        />
      </div>
      <Fab
        className="fab-scroll"
        style={{
          position: 'fixed',
          visibility: visibility ? 'visible' : 'hidden',
          backgroundColor: '#5dc267',
          color: 'white',
        }}
        onClick={scrollToTop}
        size={window.innerWidth < 560 ? 'medium' : 'large'}
      >
        <KeyboardArrowUp />
      </Fab>
    </div>
  );
};
