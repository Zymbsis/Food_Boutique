import PopularProductItem from '../PopularProductItem/PopularProductItem';
import css from './PopularProductList.module.css';
import { useSelector } from 'react-redux';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';

const PopularProductList = () => {
  const data = useSelector(selectPopularProductsList);

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
