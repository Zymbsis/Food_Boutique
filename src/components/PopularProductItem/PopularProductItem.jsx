import { POPULAR } from 'constants';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import ProductCardAction from '../ProductCardAction/ProductCardAction.jsx';

const PopularProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCartImage
        product={product}
        handleClick={handleOpenModal}
        renderLocation={POPULAR}
      />
      <div>
        <ProductCardInfo product={product} renderLocation={POPULAR} />
        <ProductCardAction product={product} renderLocation={POPULAR} />
      </div>
    </>
  );
};

export default PopularProductItem;
