import { useEffect } from 'react';
import { Container } from 'shared';
import { Cart, CartSummary } from 'components';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='pt-32 pb-20 md:pt-[171px] md:pb-[100px] xl:pt-[153px]'>
      <Container className='pr-2 md:pr-4'>
        <CartSummary />
        <Cart />
      </Container>
    </section>
  );
};

export default OrderPage;
