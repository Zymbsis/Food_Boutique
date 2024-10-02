export const defaultOption = [{ value: '{"byABC": true}', label: 'A to Z' }];

export const sortParamsOptionsList = [
  { value: '{"byABC":true}', label: 'A to Z' },
  { value: '{"byABC":false}', label: 'Z to A' },
  { value: '{"byPrice":true}', label: 'Cheap' },
  { value: '{"byPrice":false}', label: 'Expensive' },
  { value: '{"byPopularity":false}', label: 'Popular' },
  { value: '{"byPopularity":true}', label: 'Not popular' },
  { value: '{}', label: 'Show all' },
];

export const createOptionFromSortParams = selectedSortParams => {
  return JSON.stringify(selectedSortParams) === '{}'
    ? defaultOption
    : sortParamsOptionsList.find(
        item => item.value === JSON.stringify(selectedSortParams)
      );
};
