import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularProducts } from '@redux/productLists/operations.js';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';
import { PopularProductItem } from 'components';
import css from './PopularProductsList.module.css';

const PopularProductsList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPopularProductsList);

  useEffect(() => {
    if (data.length) return;
    dispatch(fetchPopularProducts());
  }, [data, dispatch]);

  return (
    <ul className={css.productList}>
      {data.length > 0 &&
        data.map(product => (
          <li className={css.productItem} key={product._id}>
            <PopularProductItem {...product} />
          </li>
        ))}
    </ul>
  );
};

export default PopularProductsList;
