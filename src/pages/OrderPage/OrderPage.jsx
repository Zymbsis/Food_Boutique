import { Container } from 'shared';
import { useSelector } from 'react-redux';
import { selectProductQuantity } from '@redux/cart/slice';
import css from './OrderPage.module.css';
import Cart from '../../components/Cart/Cart.jsx';
import { useEffect } from 'react';
import CartSummary from '../../components/CartSummary/CartSummary.jsx';

const OrderPage = () => {
  const productsQuantity = useSelector(selectProductQuantity);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={css.section}>
      <Container className={css.container}>
        <CartSummary />
        {productsQuantity ? <Cart /> : <p>Empty</p>}
      </Container>
    </section>
  );
};

export default OrderPage;
