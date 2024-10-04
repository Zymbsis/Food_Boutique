import { useSelector } from 'react-redux';
import { Icon } from 'shared';
import { selectProductsQuantity } from '@redux/cart/slice.js';
import css from './CartSummary.module.css';

const CartSummary = () => {
  const productsQuantity = useSelector(selectProductsQuantity);

  return (
    <>
      <span className={css.cartIconWrapper}>
        <Icon iconId={'cart'} />
      </span>
      <span
        className={css.cartTextWrapper}
      >{`Cart (${productsQuantity})`}</span>
    </>
  );
};

export default CartSummary;
