import { Icon } from 'shared';
import clsx from 'clsx';
import css from './ProductCardIcon.module.css';

const ProductCardIcon = ({ className, isInCart, onClick }) => {
  return (
    <button
      className={clsx(css.productCardButton, {
        [className]: className,
      })}
      type="button"
      onClick={onClick}
    >
      <Icon
        className={clsx(css.icon, { [css.optionalClass]: isInCart })}
        iconId={isInCart ? `check` : `cart`}
      />
    </button>
  );
};

export default ProductCardIcon;
