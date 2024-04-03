import { create } from 'zustand';

import { createTagsSlice } from './tagsSlice';
import { createPageSlice } from './pageSlice';
import { createSortingSlice } from './sortingSlice';

export const useTagStore = create(set => ({
  ...createTagsSlice(set),
  ...createPageSlice(set),
  ...createSortingSlice(set),
}));
