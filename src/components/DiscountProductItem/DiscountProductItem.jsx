import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice';
import { ProductName, Icon } from 'shared';
import css from './DiscountProductItem.module.css';
import { useModalContext } from '../../hooks/useContext.js';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import AddToCartButton from '../AddToCartButton/AddToCartButton.jsx';

const DiscountProductItem = ({ product }) => {
  const { _id, img, name, price } = product;
  const dispatch = useDispatch();
  const { openModal } = useModalContext();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === _id);

  const handleClick = () => {
    isInCart
      ? dispatch(deleteProduct(product))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div
        className={css.imgWrapper}
        onClick={() => {
          openModal(ProductCardModal, { _id, isInCart, handleClick });
        }}
      >
        <img src={img} alt={name} width={140} height={140} />
        <Icon iconId="discount" className={css.icon} />
      </div>
      <div className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <div className={css.priceWrapper}>
          <span>{`$${price.toFixed(2)}`}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  );
};

export default DiscountProductItem;
