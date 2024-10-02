import { useDispatch, useSelector } from 'react-redux';
import { ProductName, ProductDescription, ProductCardIcon } from 'shared';
import { selectCart, deleteProduct, addProduct } from '@redux/cart/slice';
import css from './MainProductItem.module.css';
// import { useModalContext } from '../../../../hooks/useContext.js';

const MainProductItem = ({ product }) => {
  const { img, name, price } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === product._id);

  // const { openModal } = useModalContext();

  const handleClick = () => {
    isInCart
      ? dispatch(deleteProduct(product))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className={css.imgWrapper}>
        <img src={img} alt={name} width={140} height={140} />
      </div>
      <ul className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <ProductDescription product={product} />
      </ul>
      <div className={css.priceWrapper}>
        <span>{`$${price}`}</span>
        <ProductCardIcon onClick={handleClick} isInCart={isInCart} />
      </div>
    </>
  );
};

export default MainProductItem;
