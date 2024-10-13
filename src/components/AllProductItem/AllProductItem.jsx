import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';

const MainProductItem = ({ product, handleOpenModal }) => {
  return (
    <>
      <ProductCardImage product={product} handleClick={handleOpenModal} />
      <ProductCardInfo product={product} />
      <ProductCardAction product={product} />
    </>
  );
};

export default MainProductItem;
