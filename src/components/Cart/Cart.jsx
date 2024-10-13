import { useSelector } from 'react-redux';
import { selectProductQuantity } from '@redux/cart/selectors.js';
import { CartProductsList, Order, EmptyCart } from 'components';
import css from './Cart.module.css';

const Cart = () => {
  const productsQuantity = useSelector(selectProductQuantity);

  if (!productsQuantity) return <EmptyCart />;

  return (
    <div className={css.cartWrapper}>
      <CartProductsList />
      <Order />
    </div>
  );
};

export default Cart;
