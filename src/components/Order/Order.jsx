import { useSelector } from 'react-redux';
import { Title } from 'shared';
import { selectTotalSum } from '@redux/cart/selectors.js';
import { OrderForm } from 'components';
import css from './Order.module.css';

const Order = () => {
  const totalSum = useSelector(selectTotalSum);
  return (
    <div className={css.wrapper}>
      <Title className={css.title}>Your Order</Title>
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
