import ProductCartImage from '../../../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../../../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../../../CartItemControl/CartItemControl.jsx';
import css from './MainProductItem.module.css';

const MainProductItem = ({ product, handleOpenModal }) => {
  const { img, name, is10PercentOff, _id } = product;

  return (
    <>
      <ProductCartImage
        img={img}
        name={name}
        handleClick={handleOpenModal}
        className={css.imgWrapper}
        isDiscount={is10PercentOff}
        _id={_id}
      />
      <ProductCardInfo product={product} />
      <CartItemControl product={product} />
    </>
  );
};

export default MainProductItem;
