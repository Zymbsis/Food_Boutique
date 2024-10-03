import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice';
import { ProductName, ProductDescription } from 'shared';

import css from './PopularProductItem.module.css';
import { useModalContext } from '../../hooks/useContext.js';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import AddToCartButton from '../AddToCartButton/AddToCartButton.jsx';

const PopularProductItem = ({ product }) => {
  const { _id, img, name } = product;
  const { openModal } = useModalContext();
  const dispatch = useDispatch();
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
      </div>
      <ul className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <ProductDescription product={product} />
      </ul>
      <AddToCartButton
        product={product}
        type="popular"
        className={css.cartBtn}
      />
    </>
  );
};

export default PopularProductItem;
