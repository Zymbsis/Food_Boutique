import { CartIndicator } from 'shared';
import { useSelector } from 'react-redux';
import { selectProductsQuantity } from '@redux/cart/slice';
import css from './OrderPage.module.css';

const OrderPage = () => {
  const productsQuantity = useSelector(selectProductsQuantity);
  return (
    <div style={{ paddingTop: 100 }}>
      <CartIndicator productsQuantity={productsQuantity} />
    </div>
  );
};

export default OrderPage;
