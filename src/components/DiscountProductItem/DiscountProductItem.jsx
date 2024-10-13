import { DISCOUNT } from 'constants';
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCardImage
        product={product}
        handleClick={handleOpenModal}
        renderLocation={DISCOUNT}
      />
      <div className={css.descriptionWrapper}>
        <ProductCardInfo product={product} renderLocation={DISCOUNT} />
        <ProductCardAction product={product} renderLocation={DISCOUNT} />
      </div>
    </>
  );
};

export default DiscountProductItem;
