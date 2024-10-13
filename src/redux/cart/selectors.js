import { createSelector } from '@reduxjs/toolkit';

export const selectCart = state => state.cart.cart;

export const selectTotalSum = createSelector([selectCart], cart =>
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
);

export const selectProductQuantity = createSelector(
  [selectCart],
  cart => cart.length
);
export const selectDataForOrdering = createSelector([selectCart], cart => {
  return cart.map(item => ({ productId: item._id, amount: item.quantity }));
});