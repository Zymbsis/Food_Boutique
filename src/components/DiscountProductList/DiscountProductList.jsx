import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiscountProductsList } from '@redux/productLists/selectors.js';
import { fetchDiscountProducts } from '@redux/productLists/operations.js';
import { useModalContext } from 'hooks';
import DiscountProductItem from '../DiscountProductItem/DiscountProductItem.jsx';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import css from './DiscountProductList.module.css';

const DiscountProductList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModalContext();
  const data = useSelector(selectDiscountProductsList);
  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  useEffect(() => {
    if (data.length) return;
    dispatch(fetchDiscountProducts());
  }, [data, dispatch]);

  return (
    <div className={css.innerContainer}>
      <ul className={css.productList}>
        {data.length > 0 &&
          data.map(product => (
            <li className={css.productItem} key={product._id}>
              <DiscountProductItem
                product={product}
                handleOpenModal={handleOpenModal}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DiscountProductList;
