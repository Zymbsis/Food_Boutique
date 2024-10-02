import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice';
import { ProductCardIcon, ProductName, Icon } from 'shared';
import css from './DiscountProductItem.module.css';

const DiscountProductItem = ({ product }) => {
  const { _id, img, name, price } = product;
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
      <div className={css.imgWrapper}>
        <img src={img} alt={name} width={140} height={140} />
        <Icon iconId="discount" className={css.icon} />
      </div>
      <div className={css.descriptionWrapper}>
        <ProductName className={css.productName}>{name}</ProductName>
        <div className={css.priceWrapper}>
          <span>{`$${price}`}</span>
          <ProductCardIcon onClick={handleClick} isInCart={isInCart} />
        </div>
      </div>
    </>
  );
};

export default DiscountProductItem;
