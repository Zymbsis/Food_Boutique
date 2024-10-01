import { useSelector } from 'react-redux';
import { selectAllProductsList } from '@redux/productLists/selectors.js';
import MainProductItem from '../MainProductItem/MainProductItem';
import css from './MainProductList.module.css';

const MainProductList = () => {
  const allProducts = useSelector(selectAllProductsList);
  return (
    <>
      <ul className={css.productList}>
        {allProducts.map(product => (
          <li className={css.productItem} key={product._id}>
            <MainProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainProductList;
