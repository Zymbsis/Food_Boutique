import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';

const MainProductItem = ({ handleOpenModal, ...product }) => {
  return (
    <>
      <ProductCardImage {...product} handleClick={handleOpenModal} />
      <ProductCardInfo {...product} />
      <ProductCardAction {...product} />
    </>
  );
};

export default MainProductItem;
