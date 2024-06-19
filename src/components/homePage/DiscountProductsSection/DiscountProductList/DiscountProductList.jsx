import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiscountProducts } from '@redux/productLists/slice';
import { fetchDiscountProducts } from '@redux/productLists/operations';
import DiscountProductItem from '../DiscountProductItem/DiscountProductItem';
import css from './DiscountProductList.module.css';

const DiscountProductList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDiscountProducts);
  useEffect(() => {
    if (data.length > 0) return;
    dispatch(fetchDiscountProducts());
  }, [dispatch, data]);

  return (
    <div className={css.innerContainer}>
      <ul className={css.productList}>
        {data.length > 0 &&
          data.map(product => (
            <li className={css.productItem} key={product._id}>
              <DiscountProductItem product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DiscountProductList;
