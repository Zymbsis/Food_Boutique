import { DISCOUNT } from 'constants';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import ProductCardAction from '../ProductCardAction/ProductCardAction.jsx';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCartImage
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
