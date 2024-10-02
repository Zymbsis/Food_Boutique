import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '@redux/productLists/operations.js';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
  selectTotalPages,
} from '@redux/productLists/selectors.js';
import {
  selectRequestParams,
  selectSortParams,
} from '@redux/requestParams/selectors.js';
import { scrollIntoView } from 'helpers';
import { useWindowSize } from 'hooks';
import { OrganicFood } from 'shared';
import MainProductList from './MainProductList/MainProductList';
import Pagination from '../../Pagination/Pagination';
import NothingFound from './NothingFound/NothingFound';
import css from './MainProductsSection.module.css';

const MainProductsSection = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const [firstRender, setFirstRender] = useState(true);
  const sectionRef = useRef(null);
  const totalPages = useSelector(selectTotalPages);
  const allProducts = useSelector(selectAllProductsList);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);
  const sortParams = useSelector(selectSortParams);
  const requestParams = useSelector(selectRequestParams);

  useEffect(() => {
    if (requestParams.limit === null) return;
    dispatch(fetchAllProducts({ ...requestParams, ...sortParams }));
  }, [requestParams, sortParams, dispatch]);

  useEffect(() => {
    if (!firstRender) {
      scrollIntoView(sectionRef, windowWidth);
      return;
    }
    setFirstRender(false);
  }, [requestParams.page, firstRender, windowWidth]);

  if (loading)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFood className={css.loader} />
      </div>
    );
  if (error) {
    <div className={css.section}>
      <p>Error</p>
    </div>;
  }
  if (allProducts.length === 0) {
    return <NothingFound />;
  }
  return (
    <section ref={sectionRef} className={css.section}>
      <MainProductList /> {totalPages > 1 && <Pagination />}
    </section>
  );
};

export default MainProductsSection;
