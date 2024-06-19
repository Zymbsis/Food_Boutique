import PopularProductItem from '../PopularProductItem/PopularProductItem';
import css from './PopularProductList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopularProducts } from '@redux/productLists/slice';
import { useEffect } from 'react';
import { fetchPopularProducts } from '../../../../redux/productLists/operations';

const PopularProductList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectPopularProducts);
  useEffect(() => {
    if (data.length > 0) return;
    dispatch(fetchPopularProducts());
  }, [dispatch, data]);

  return (
    <ul className={css.productList}>
      {data.length > 0 &&
        data.map(product => (
          <li className={css.productItem} key={product._id}>
            <PopularProductItem product={product} />
          </li>
        ))}
    </ul>
  );
};

export default PopularProductList;
