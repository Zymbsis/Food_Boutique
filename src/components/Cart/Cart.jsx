import css from './Cart.module.css';
import CartProductList from '../CartProductList/CartProductList.jsx';
import Order from '../Order/Order.jsx';

const Cart = () => {
  return (
    <div className={css.cartWrapper}>
      <CartProductList />
      <Order />
    </div>
  );
};

export default Cart;
