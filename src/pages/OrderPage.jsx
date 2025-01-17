import { useEffect } from 'react';
import { Container } from 'shared';
import { Cart, EmptyCart } from 'components';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors.js';

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsQuantity = useSelector(selectCart);

  return (
    <section className="pb-20 pt-32 md:pb-[100px] md:pt-[171px] xl:pt-[153px]">
      <Container className="pr-2 md:pr-4">
        {productsQuantity.length ? <Cart /> : <EmptyCart />}
      </Container>
    </section>
  );
};

export default OrderPage;
