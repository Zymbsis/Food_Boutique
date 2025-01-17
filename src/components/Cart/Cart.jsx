import { CartProductsList, Order, CartSummary } from 'components';
import ClearCartButton from '../ClearCart/ClearCartButton.jsx';

const Cart = () => {
  return (
    <div className="xl:flex xl:gap-[101px]">
      <div>
        <CartSummary />
        <ClearCartButton />
        <CartProductsList />
      </div>
      <Order />
    </div>
  );
};

export default Cart;
