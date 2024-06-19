import { defaultOption } from '../.data/categoryOptions';

export const createOptions = arr => {
  const optionsList = [
    ...arr.map(category => ({
      value: category,
      label: category.replace('_&_', ' & ').replace('_', ' '),
    })),
    { value: '', label: 'Show all' },
  ];
  return optionsList;
};

export const createOption = category => {
  if (category === '') {
    return defaultOption;
  }

  return [
    {
      value: category,
      label: category.replace('_&_', ' & ').replace('_', ' '),
    },
  ];
};
