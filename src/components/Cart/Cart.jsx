import { useSelector } from 'react-redux';
import { selectCart } from '@redux/cart/selectors.js';
import { CartProductsList, Order, EmptyCart } from 'components';

const Cart = () => {
  const productsQuantity = useSelector(selectCart);

  if (!productsQuantity.length) return <EmptyCart />;

  return (
    <div className="xl:flex xl:gap-[101px]">
      <CartProductsList />
      <Order />
    </div>
  );
};

export default Cart;
