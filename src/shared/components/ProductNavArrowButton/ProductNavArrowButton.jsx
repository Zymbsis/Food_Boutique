import { Icon } from 'shared';
import css from './ProductNavArrowButton.module.css';

const ProductNavArrowButton = ({ iconId, handleClick, isDisabled }) => {
  return (
    <button
      type="button"
      className={css.arrowButton}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <Icon iconId={iconId} className={css.icon} />
    </button>
  );
};

export default ProductNavArrowButton;
