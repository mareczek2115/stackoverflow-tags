export const createPageSlice = (set: any) => ({
  page: 1,
  pageSize: 10,
  updatePage: (newPage: number) => set(() => ({ page: newPage })),
  updatePageSize: (newPageSize: number) =>
    set(() => ({ pageSize: newPageSize })),
});
