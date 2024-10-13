import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularProducts } from '@redux/productLists/operations.js';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';
import { useModalContext } from 'hooks';
import PopularProductItem from '../PopularProductItem/PopularProductItem';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';
import css from './PopularProductList.module.css';

const PopularProductList = () => {
  const dispatch = useDispatch();
  const { openModal } = useModalContext();
  const data = useSelector(selectPopularProductsList);
  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  useEffect(() => {
    if (data.length) return;
    dispatch(fetchPopularProducts());
  }, [data, dispatch]);

  return (
    <ul className={css.productList}>
      {data.length > 0 &&
        data.map(product => (
          <li className={css.productItem} key={product._id}>
            <PopularProductItem
              product={product}
              handleOpenModal={handleOpenModal}
            />
          </li>
        ))}
    </ul>
  );
};

export default PopularProductList;
