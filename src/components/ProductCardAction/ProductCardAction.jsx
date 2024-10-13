import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice.js';
import { ALL, DISCOUNT, MODAL, POPULAR } from 'constants';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './ProductCardAction.module.css';

const ProductCardAction = ({ product, renderLocation = ALL, className }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === product._id);

  const handleToggleCart = () => {
    isInCart
      ? dispatch(deleteProduct(product._id))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <div
      className={clsx(css.ctrlWrapper, {
        [css.popularWrapper]: renderLocation === POPULAR,
        [css.discountWrapper]: renderLocation === DISCOUNT,
        [css.modalWrapper]: renderLocation === MODAL,
        [css.isInCart]: isInCart,
        className,
      })}
    >
      {renderLocation !== POPULAR && (
        <span>{`$${product.price.toFixed(2)}`}</span>
      )}
      <button type="button" onClick={handleToggleCart}>
        {renderLocation === MODAL && <>{isInCart ? 'Remove from' : 'Add to'}</>}
        <Icon
          iconId={!isInCart || renderLocation === MODAL ? 'cart' : 'check'}
        />
      </button>
    </div>
  );
};

export default ProductCardAction;
