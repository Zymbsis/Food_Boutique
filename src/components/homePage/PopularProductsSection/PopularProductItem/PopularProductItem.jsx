import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice';
import { ProductCardIcon, ProductName, ProductDescription } from 'shared';
import clsx from 'clsx';
import css from './PopularProductItem.module.css';

const PopularProductItem = ({ product }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const isInCart = cart.some(item => item._id === product._id);
  const { img, name } = product;

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
      <ProductCardIcon
        onClick={handleClick}
        isInCart={isInCart}
        className={clsx(css.productButton, { [css.optionalClass]: isInCart })}
      />
    </>
  );
};

export default PopularProductItem;
