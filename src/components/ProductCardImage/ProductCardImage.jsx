import clsx from 'clsx';
import { Icon } from '../../shared/index.js';
import css from './ProductCardImage.module.css';
import { discount, modal, popular, all } from 'constants';

const ProductCartImage = ({
  product: { img, name, _id, is10PercentOff },
  handleClick,
  renderLocation = all,
}) => {
  return (
    <div
      className={clsx(css.imgWrapper, {
        [css.popularImg]: renderLocation === popular,
        [css.discountImg]: renderLocation === discount,
        [css.modalImg]: renderLocation === modal,
      })}
      onClick={() => handleClick(_id)}
    >
      <img src={img} alt={name} width={295} height={178} />
      {is10PercentOff && (
        <Icon iconId="discount" className={css.discountIcon}></Icon>
      )}
    </div>
  );
};

export default ProductCartImage;
