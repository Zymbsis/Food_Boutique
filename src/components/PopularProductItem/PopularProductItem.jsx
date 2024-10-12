import { popular } from 'constants';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';

const PopularProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCartImage
        product={product}
        handleClick={handleOpenModal}
        renderLocation={popular}
      />
      <div>
        <ProductCardInfo product={product} renderLocation={popular} />
        <CartItemControl product={product} renderLocation={popular} />
      </div>
    </>
  );
};

export default PopularProductItem;
