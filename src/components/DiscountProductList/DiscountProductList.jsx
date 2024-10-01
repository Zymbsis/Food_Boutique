import css from './DiscountProductList.module.css';
import { selectDiscountProductsList } from '@redux/productLists/selectors.js';
import { useSelector } from 'react-redux';
import DiscountProductItem from '../DiscountProductItem/DiscountProductItem.jsx';

const DiscountProductList = () => {
  const data = useSelector(selectDiscountProductsList);

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
