import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseProductQuantity,
  deleteAllProducts,
  deleteProduct,
  increaseProductQuantity,
  selectCart,
} from '@redux/cart/slice.js';
import { CloseButton } from 'shared';
import CartProductItem from '../CartProductItem/CartProductItem.jsx';
import css from './CartProductList.module.css';

const CartProductList = () => {
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
        {productList.map(item => (
          <li key={item._id}>
            <CartProductItem
              product={item}
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

export default CartProductList;
