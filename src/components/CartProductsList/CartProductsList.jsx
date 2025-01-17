import { useSelector } from 'react-redux';
import { selectCart } from '@redux/cart/selectors.js';
import { CartProductItem, ProductCardModal } from 'components';
import css from './CartProductsList.module.css';
import { use } from 'react';
import { ModalContext } from '../Modal/ModalProvider.jsx';
import ClearCartButton from '../ClearCart/ClearCartButton.jsx';

const CartProductsList = () => {
  const productList = useSelector(selectCart);
  const { openModal } = use(ModalContext);
  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  return (
    <div className={css.cartListWrapper}>
      <ul className={`${css.cartList} grayScrollbar`}>
        {productList.map(product => (
          <li
            key={product._id}
            onClick={() => {
              handleOpenModal(product._id);
            }}
          >
            <CartProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProductsList;
