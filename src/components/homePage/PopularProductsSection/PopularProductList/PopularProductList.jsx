import { fetchPopularProducts } from 'services';
import PopularProductItem from '../PopularProductItem/PopularProductItem';
import css from './PopularProductList.module.css';
import { useSimpleFetch } from '../../../../hooks/useSimpleFetch';

const PopularProductList = () => {
  const { data } = useSimpleFetch(fetchPopularProducts);

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
