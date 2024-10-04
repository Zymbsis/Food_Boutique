import { discount } from 'constants';
import { useModalContext } from 'hooks';
import { ProductName, Icon } from 'shared';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ product }) => {
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
        <Icon iconId="discount" className={css.icon} />
      </div>
      <div className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <CartItemControl product={product} renderLocation={discount} />
      </div>
    </>
  );
};

export default DiscountProductItem;
