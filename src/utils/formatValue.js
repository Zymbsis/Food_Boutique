export const formatProductCategory = category => {
  return category.replaceAll('_&_', ' & ').replaceAll('_', ' ');
};

export const formatPrice = price => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const formatProductPopularity = popularity => {
  return (popularity / 10000).toFixed(2);
};
