import { ITag } from '../common/types';

export const createTagsSlice = (set: any) => ({
  tags: [],
  updateTags: (tags: Array<ITag>) => set(() => ({ tags: tags })),
});
