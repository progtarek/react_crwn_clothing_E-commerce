import { createSelector } from 'reselect';

const directorySelector = (state) => state.directory;

const itemsSelector = createSelector(
  [directorySelector],
  (directory) => directory.items
);

export default itemsSelector;
