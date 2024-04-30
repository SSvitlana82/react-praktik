export const tasksSelector = (state) => {
  console.log(state);
  return [state.tasks.items, state.tasks.isLoading, state.tasks.error];
};
