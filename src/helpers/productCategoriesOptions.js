const defaultOption = { value: '', label: 'Category' };

const createOption = category => {
  return {
    value: category,
    label: category.replace('_&_', ' & ').replace('_', ' '),
  };
};

export const createOptionsList = arr => {
  if (arr.length === 0) {
    return defaultOption;
  }

  const optionsList = [
    ...arr.map(category => createOption(category)),
    { value: '', label: 'Show all' },
  ];
  return optionsList;
};

export const createOptionFromCategory = category => {
  if (category === '') {
    return defaultOption;
  }

  return [createOption(category)];
};
