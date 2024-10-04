import { popular } from 'constants';
import { useModalContext } from 'hooks';
import { ProductName, ProductDescription } from 'shared';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
import css from './PopularProductItem.module.css';

const PopularProductItem = ({ product }) => {
  const { img, name } = product;
  const { openModal } = useModalContext();

  return (
    <>
      <div
        className={css.imgWrapper}
        onClick={() => {
          openModal(ProductCardModal, { product });
        }}
      >
        <img src={img} alt={name} width={140} height={140} />
      </div>
      <ul className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <ProductDescription product={product} />
      </ul>
      <CartItemControl product={product} renderLocation={popular} />
    </>
  );
};

export default PopularProductItem;
