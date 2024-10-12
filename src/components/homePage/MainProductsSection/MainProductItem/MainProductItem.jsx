import ProductCartImage from '../../../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../../../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../../../CartItemControl/CartItemControl.jsx';

const MainProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCartImage product={product} handleClick={handleOpenModal} />
      <ProductCardInfo product={product} />
      <CartItemControl product={product} />
    </>
  );
};

export default MainProductItem;
