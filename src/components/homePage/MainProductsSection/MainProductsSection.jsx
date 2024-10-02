import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'hooks';
import MainProductList from './MainProductList/MainProductList';
import Pagination from '../../Pagination/Pagination';
import NothingFound from './NothingFound/NothingFound';
import { scrollIntoView } from 'helpers';
import { fetchAllProducts } from '@redux/productLists/operations.js';
import css from './MainProductsSection.module.css';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
  selectTotalPages,
} from '@redux/productLists/selectors.js';
import { OrganicFood } from 'shared';
import {
  selectCategory,
  selectKeyword,
  selectLimit,
  selectPage,
  selectSortParams,
} from '@redux/requestParams/selectors.js';

const MainProductsSection = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const [firstRender, setFirstRender] = useState(true);
  const sectionRef = useRef(null);
  const totalPages = useSelector(selectTotalPages);
  const allProducts = useSelector(selectAllProductsList);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const category = useSelector(selectCategory);
  const keyword = useSelector(selectKeyword);
  const sortParams = useSelector(selectSortParams);

  useEffect(() => {
    if (limit === null) return;
    const requestParams = { limit, page, category, keyword, ...sortParams };

    dispatch(fetchAllProducts(requestParams));
  }, [page, category, keyword, sortParams, limit, dispatch]);

  useEffect(() => {
    if (!firstRender) {
      scrollIntoView(sectionRef, windowWidth);
      return;
    }
    setFirstRender(false);
  }, [page, firstRender, windowWidth]);

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
