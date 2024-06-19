import MainProductItem from '../MainProductItem/MainProductItem';
import css from './MainProductList.module.css';

const MainProductList = ({ productList }) => {
  return (
    <>
      <ul className={css.productList}>
        {productList.map(product => (
          <li className={css.productItem} key={product._id}>
            <MainProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainProductList;
