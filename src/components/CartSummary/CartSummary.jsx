import { useSelector } from 'react-redux';
import { Icon } from 'shared';
import { selectCart } from '@redux/cart/selectors.js';
import css from './CartSummary.module.css';

const CartSummary = ({ className }) => {
  const productsQuantity = useSelector(selectCart);

  return (
    <span className={`${css.summeryWrapper} ${className}`}>
      <span className={css.cartIconWrapper}>
        <Icon iconId={'cart'} />
      </span>
      <span
        className={css.cartTextWrapper}
      >{`Cart (${productsQuantity.length})`}</span>
    </span>
  );
};

export default CartSummary;
