import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, selectCart } from '@redux/cart/slice.js';
import { all, discount, modal, popular } from 'constants';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './CartItemControl.module.css';

const CartItemControl = ({ product, renderLocation = all, className }) => {
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
        [css.popularWrapper]: renderLocation === popular,
        [css.discountWrapper]: renderLocation === discount,
        [css.modalWrapper]: renderLocation === modal,
        [css.isInCart]: isInCart === true,
        [className]: className,
      })}
    >
      {renderLocation !== popular && (
        <span>{`$${product.price.toFixed(2)}`}</span>
      )}
      <button type="button" onClick={handleToggleCart}>
        {renderLocation === modal && <>{isInCart ? 'Remove from' : 'Add to'}</>}
        <Icon
          iconId={!isInCart || renderLocation === modal ? 'cart' : 'check'}
        />
      </button>
    </div>
  );
};

export default CartItemControl;
