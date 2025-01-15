import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProducts } from '@redux/cart/slice.js';
import { selectCart } from '@redux/cart/selectors.js';
import { CloseButton } from 'shared';
import { CartProductItem } from 'components';
import css from './CartProductsList.module.css';

const CartProductsList = () => {
  const dispatch = useDispatch();
  const handleDeleteAll = () => dispatch(deleteAllProducts());
  const productList = useSelector(selectCart);

  return (
    <div className={css.cartListWrapper}>
      <div className={css.deleteAll}>
        <span>Delete all</span>
        <CloseButton className={css.deleteAllBtn} onClick={handleDeleteAll} />
      </div>
      <ul className={css.cartList}>
        {productList.map(product => (
          <li key={product._id}>
            <CartProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProductsList;
