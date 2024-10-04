import { useDispatch } from 'react-redux';
import { CloseButton } from '../../shared/index.js';
import CartSummary from '../CartSummary/CartSummary.jsx';
import css from './Cart.module.css';
import { deleteAllProducts } from '../../redux/cart/slice.js';

const Cart = () => {
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    dispatch(deleteAllProducts());
  };
  return (
    <>
      <div className={css.summeryWrapper}>
        <CartSummary />
      </div>
      <div className={css.deleteAll}>
        <span>Delete all</span>
        <CloseButton className={css.deleteBtn} handleClick={handleDeleteAll} />
      </div>
    </>
  );
};

export default Cart;
