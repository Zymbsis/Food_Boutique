import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors.js';
import { addProduct, deleteProduct } from '../redux/cart/slice.js';

export const useCart = product => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === product?._id);

  const handleToggleCart = () => {
    isInCart
      ? dispatch(deleteProduct(product._id))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return { isInCart, handleToggleCart };
};
