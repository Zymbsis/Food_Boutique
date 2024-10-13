import { useEffect } from 'react';
import { Container } from 'shared';
import { Cart, CartSummary } from 'components';
import css from './OrderPage.module.css';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={css.section}>
      <Container className={css.container}>
        <CartSummary />
        <Cart />
      </Container>
    </section>
  );
};

export default OrderPage;
