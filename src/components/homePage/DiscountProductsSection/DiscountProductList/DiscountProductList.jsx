import DiscountProductItem from '../DiscountProductItem/DiscountProductItem';
import { useSimpleFetch } from 'hooks';
import { fetchDiscountProducts } from 'services';
import css from './DiscountProductList.module.css';

const DiscountProductList = () => {
  const { data } = useSimpleFetch(fetchDiscountProducts);

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
