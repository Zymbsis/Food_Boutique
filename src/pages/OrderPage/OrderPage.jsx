import { Container } from 'shared';
import { useSelector } from 'react-redux';
import { selectProductsQuantity } from '@redux/cart/slice';
import css from './OrderPage.module.css';
import Cart from '../../components/Cart/Cart.jsx';

const OrderPage = () => {
  const productsQuantity = useSelector(selectProductsQuantity);
  return (
    <section className={css.section}>
      <Container className={css.container}>
        {productsQuantity ? <Cart /> : <p>Empty</p>}
      </Container>
    </section>
  );
};

export default OrderPage;
