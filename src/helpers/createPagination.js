import { tablet } from 'constants';

export const createPaginationPageNumbers = (totalPages, page, windowWidth) => {
  if (totalPages === 1) return;
  if (windowWidth < tablet.width) {
    return page === totalPages ? [page - 1, page] : [page, page + 1];
  } else {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (v, i) => i + 1);
    } else {
      return totalPages < page + 3
        ? Array.from({ length: 4 }, (v, i) => totalPages - i).reverse()
        : Array.from({ length: 4 }, (v, i) => page + i);
    }
  }
};
