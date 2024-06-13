import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '@redux/cart/slice';
import { addProduct, deleteProduct } from '@redux/cart/slice';
import { ProductCardIcon, ProductDescription, ProductName } from 'shared';
import css from './Product.module.css';

const Product = ({ product }) => {
  const { img, name, price } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === product._id);

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

export default Product;
