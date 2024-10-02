import { useDispatch, useSelector } from 'react-redux';
import { ProductName, ProductDescription, ProductCardIcon } from 'shared';
import { selectCart, deleteProduct, addProduct } from '@redux/cart/slice';
import css from './MainProductItem.module.css';
import { useModalContext } from '../../../../hooks/useContext.js';
import ProductCardModal from '../../../ProductCardModal/ProductCardModal.jsx';

const MainProductItem = ({ product }) => {
  const { _id, img, name, price } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === _id);

  const { openModal } = useModalContext();

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
          openModal(ProductCardModal, { id: _id });
        }}
      >
        <img src={img} alt={name} width={140} height={140} />
      </div>
      <ul className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <ProductDescription product={product} />
      </ul>
      <div className={css.priceWrapper}>
        <span>{`$${price.toFixed(2)}`}</span>
        <ProductCardIcon onClick={handleClick} isInCart={isInCart} />
      </div>
    </>
  );
};

export default MainProductItem;
