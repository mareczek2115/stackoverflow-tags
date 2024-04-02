export const createSortingSlice = (set: any) => ({
  sortBy: 'popular',
  orderBy: 'desc',
  updateSorting: (newSorting: string) => set(() => ({ sortBy: newSorting })),
  updateOrder: (newOrder: string) => set(() => ({ orderBy: newOrder })),
});
