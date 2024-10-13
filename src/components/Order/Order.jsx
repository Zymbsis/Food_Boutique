import { useSelector } from 'react-redux';
import { ProductListTitle } from '../../shared/index.js';
import css from './Order.module.css';
import { selectTotalSum } from '../../redux/cart/selectors.js';
import OrderForm from '../OrderForm/OrderForm.jsx';

const Order = () => {
  const totalSum = useSelector(selectTotalSum);
  return (
    <div className={css.wrapper}>
      <ProductListTitle className={css.title}>Your Order</ProductListTitle>
      <div className={css.totalWrapper}>
        <span className={css.total}>Total</span>
        <span className={css.sum}>
          <span>Sum: </span>${totalSum.replace('.', ',')}
        </span>
      </div>
      <OrderForm />
    </div>
  );
};

export default Order;
