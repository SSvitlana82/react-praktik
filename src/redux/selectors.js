export const tasksSelector = (state) => {
  return [state.items, state.isLoading, state.error];
};

export const filtersStatusSelector = (state) => {
  return state.filters.status;
};
