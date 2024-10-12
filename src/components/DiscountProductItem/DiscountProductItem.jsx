import { discount } from 'constants';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ product, handleOpenModal }) => {
  const { img, name, _id } = product;

  return (
    <>
      <ProductCartImage
        img={img}
        name={name}
        handleClick={handleOpenModal}
        isDiscount={true}
        className={css.imgWrapper}
        _id={_id}
      />
      <div className={css.descriptionWrapper}>
        <ProductCardInfo product={product} renderLocation={discount} />
        <CartItemControl product={product} renderLocation={discount} />
      </div>
    </>
  );
};

export default DiscountProductItem;
