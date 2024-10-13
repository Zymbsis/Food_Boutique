import { POPULAR } from 'constants';
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';

const PopularProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCardImage
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
