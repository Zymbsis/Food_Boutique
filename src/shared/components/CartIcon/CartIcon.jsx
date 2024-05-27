import icon from '../../../icons/sprite.svg';
import clsx from 'clsx';
import css from './CartIcon.module.css';

const CartIcon = ({ hasLabel = false, iconId = 'cart', className }) => {
  const quantity = 7;
  return (
    <div className={clsx(css.cartIconWrapper, { [className]: className })}>
      <svg role="img">
        <use xlinkHref={`${icon}#${iconId}`} />
      </svg>
      {hasLabel && <span>{`Cart (${quantity})`}</span>}
    </div>
  );
};

export default CartIcon;
