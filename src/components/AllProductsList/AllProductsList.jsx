import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
} from '@redux/productLists/selectors.js';
import { AllProductItem, NothingFound } from 'components';
import css from './AllProductsList.module.css';
import { useEffect, useRef } from 'react';
import {
  selectLimit,
  selectPage,
  selectRequestParamsExceptPage,
} from '../../redux/requestParams/selectors.js';
import { fetchAllProducts } from '@redux/productLists/operations.js';

const AllProductsList = () => {
  const listRef = useRef(null);
  const allProducts = useSelector(selectAllProductsList);
  const limit = useSelector(selectLimit);
  const requestParams = useSelector(selectRequestParamsExceptPage);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);
  const offset = limit === 6 ? 74 : 96;

  useEffect(() => {
    if (limit === null) return;

    dispatch(fetchAllProducts({ ...requestParams, page }));

    if (!listRef.current) return;

    const listPosition = listRef.current ? listRef.current.getBoundingClientRect().top : 0;
    const elementPosition = listPosition + window.scrollY - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }, [requestParams, limit, page, dispatch, offset]);

  if (!loading && !error && allProducts.length === 0) {
    return <NothingFound />;
  }

  return (
    <>
      {!loading && allProducts.length > 0 && (
        <ul className={`${css.productList}`} ref={listRef}>
          {allProducts.map(product => (
            <li className={css.productItem} key={product._id}>
              <AllProductItem {...product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AllProductsList;
