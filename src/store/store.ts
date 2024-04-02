import { create } from 'zustand';

import { createTagsSlice } from './tagsSlice';
import { createPageSlice } from './pageSlice';
import { createSortingSlice } from './sortingSlice';

export const useTempStore = create(set => ({
  ...createTagsSlice(set),
  ...createPageSlice(set),
  ...createSortingSlice(set),
}));
