import { Icon } from '../../shared/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  selectCart,
} from '../../redux/cart/slice.js';
import css from './AddToCartButton.module.css';
import clsx from 'clsx';

const AddToCartButton = ({ product, type, className }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === product._id);

  const handleClick = () => {
    isInCart
      ? dispatch(deleteProduct(product))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  if (type === 'modal')
    return (
      <button type="button" onClick={handleClick}>
        {isInCart ? 'Remove from' : 'Add to'} <Icon iconId="cart" />
      </button>
    );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(css.cartBtn, {
        [css.popCartBtn]: type === 'popular',
        [css.modCartBtn]: type === 'modal',
        [className]: className,
      })}
    >
      {type === 'modal' ? (
        <>
          <span>{isInCart ? 'Remove from' : 'Add to'}</span>
          <Icon iconId="cart" />
        </>
      ) : (
        <Icon iconId={isInCart ? 'check' : 'cart'} />
      )}
    </button>
  );
};

export default AddToCartButton;
