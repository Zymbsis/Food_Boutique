import { ALL, DISCOUNT, MODAL, POPULAR } from 'constants';
import { Icon } from '../../shared/index.js';
import clsx from 'clsx';
import css from './ProductCardImage.module.css';

const ProductCartImage = ({
  renderLocation = ALL,
  handleClick,
  name,
  img,
  is10PercentOff,
  _id,
}) => {
  return (
    <div
      className={clsx(css.imgWrapper, {
        [css.popularImg]: renderLocation === POPULAR,
        [css.discountImg]: renderLocation === DISCOUNT,
        [css.modalImg]: renderLocation === MODAL,
      })}
      onClick={() => handleClick(_id)}
    >
      <img src={img} alt={name} width={295} height={178} />
      {is10PercentOff && renderLocation !== MODAL && (
        <Icon iconId="discount" className={css.discountIcon}></Icon>
      )}
    </div>
  );
};

export default ProductCartImage;
