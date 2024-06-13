import clsx from 'clsx';
import { Icon } from 'shared';
import css from './CartIndicator.module.css';

const CartIndicator = ({ className, productsQuantity }) => {
  return (
    <div className={clsx(css.cartIndicatorWrapper, { [className]: className })}>
      <div className={css.iconWrapper}>
        <Icon iconId={'cart'} />
      </div>
      <span>{`Cart (${productsQuantity})`}</span>
    </div>
  );
};

export default CartIndicator;
