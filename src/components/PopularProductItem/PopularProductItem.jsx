import { POPULAR } from 'constants';
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';

const PopularProductItem = ({ handleOpenModal, ...product }) => {
  return (
    <>
      <ProductCardImage
        {...product}
        handleClick={handleOpenModal}
        renderLocation={POPULAR}
      />
      <div>
        <ProductCardInfo {...product} renderLocation={POPULAR} />
        <ProductCardAction {...product} renderLocation={POPULAR} />
      </div>
    </>
  );
};

export default PopularProductItem;
