import { DISCOUNT } from 'constants';
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ handleOpenModal, ...product }) => {
  return (
    <>
      <ProductCardImage
        {...product}
        handleClick={handleOpenModal}
        renderLocation={DISCOUNT}
      />
      <div className={css.descriptionWrapper}>
        <ProductCardInfo {...product} renderLocation={DISCOUNT} />
        <ProductCardAction {...product} renderLocation={DISCOUNT} />
      </div>
    </>
  );
};

export default DiscountProductItem;
