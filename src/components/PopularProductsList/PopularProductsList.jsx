import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useModalContext } from 'hooks';
import { fetchPopularProducts } from '@redux/productLists/operations.js';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';
import { PopularProductItem, ProductCardModal } from 'components';
import css from './PopularProductsList.module.css';

const PopularProductsList = () => {
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

export default PopularProductsList;
