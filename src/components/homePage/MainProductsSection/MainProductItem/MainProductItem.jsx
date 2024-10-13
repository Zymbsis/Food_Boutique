import ProductCartImage from '../../../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../../../ProductCardInfo/ProductCardInfo.jsx';
import ProductCardAction from '../../../ProductCardAction/ProductCardAction.jsx';

const MainProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCartImage product={product} handleClick={handleOpenModal} />
      <ProductCardInfo product={product} />
      <ProductCardAction product={product} />
    </>
  );
};

export default MainProductItem;
