import type { SortOption } from "./types";

const nearestLocationSortOption = {
  direction: 'desc',
  value: 'distance_from_user',
  label: 'Nearest location first'
};

export const projectSortOptions: SortOption[] = [
  { ...nearestLocationSortOption },
  { ...nearestLocationSortOption, direction: 'asc', label: 'Nearest location last' },
  { direction: 'desc', value: 'price', label: 'Salary: high - low' },
  { direction: 'asc', value: 'price', label: 'Salary: low - high' },
  { direction: 'desc', value: 'created_at', label: 'Created first' },
  { direction: 'asc', value: 'created_at', label: 'Created last' },
  { direction: 'desc', value: 'updated_at', label: 'Updated first' },
  { direction: 'asc', value: 'updated_at', label: 'Updated last' }
];

export const liveInventoriesSortOptions: SortOption[] = [
  { ...nearestLocationSortOption },
  { ...nearestLocationSortOption, direction: 'asc', label: 'Nearest location last' }
];

export const marketplaceSortOptions: SortOption[] = [
  { ...nearestLocationSortOption },
  { ...nearestLocationSortOption, direction: 'asc', label: 'Nearest location last' },
  { direction: 'asc', value: 'updated_at', label: 'Updated last' },
  { direction: 'desc', value: 'updated_at', label: 'Updated first' }
];
