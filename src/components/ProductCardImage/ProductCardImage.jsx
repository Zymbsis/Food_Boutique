import { Icon } from '../../shared/index.js';
import css from './ProductCardImage.module.css';

const ProductCartImage = ({
  img,
  name,
  _id,
  isDiscount,
  className,
  handleClick,
}) => {
  return (
    <div
      className={`${css.imgWrapper} ${className ?? className}`}
      onClick={() => handleClick(_id)}
    >
      <img src={img} alt={name} width={295} height={178} />
      {isDiscount && (
        <Icon iconId="discount" className={css.discountIcon}></Icon>
      )}
    </div>
  );
};

export default ProductCartImage;
