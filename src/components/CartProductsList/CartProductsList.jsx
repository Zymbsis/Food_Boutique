import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseProductQuantity,
  deleteAllProducts,
  deleteProduct,
  increaseProductQuantity,
} from '@redux/cart/slice.js';
import { selectCart } from '@redux/cart/selectors.js';
import { CloseButton } from 'shared';
import { CartProductItem } from 'components';
import css from './CartProductsList.module.css';

const CartProductsList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectCart);

  const handleDeleteAll = () => dispatch(deleteAllProducts());
  const handleDeleteProduct = _id => dispatch(deleteProduct(_id));
  const handleIncreaseQuantity = _id => dispatch(increaseProductQuantity(_id));
  const handleDecreaseQuantity = _id => dispatch(decreaseProductQuantity(_id));

  return (
    <div className={css.cartListWrapper}>
      <div className={css.deleteAll}>
        <span>Delete all</span>
        <CloseButton
          className={css.deleteAllBtn}
          handleClick={handleDeleteAll}
        />
      </div>
      <ul className={css.cartList}>
        {productList.map(product => (
          <li key={product._id}>
            <CartProductItem
              product={product}
              handleDeleteProduct={handleDeleteProduct}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProductsList;
