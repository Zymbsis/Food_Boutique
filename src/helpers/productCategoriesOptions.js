export const defaultOption = { value: '', label: 'Category' };

export const createOptionFromCategory = category => {
  if (!category) return defaultOption;

  return {
    value: category,
    label: category.replace('_&_', ' & ').replace('_', ' '),
  };
};

export const createOptionsList = arr => {
  if (!arr.length) return;
  const optionsList = [
    ...arr.map(category => createOptionFromCategory(category)),
    { value: '', label: 'Show all' },
  ];
  return optionsList;
};
