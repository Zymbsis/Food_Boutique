import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'hooks';
import MainProductList from './MainProductList/MainProductList';
import Pagination from './Pagination/Pagination';
import NothingFound from './NothingFound/NothingFound';
import clsx from 'clsx';
import css from './MainProductsSection.module.css';
import { scrollSection } from './.helpers/scrollIntoView';
import { fetchAllProducts } from '@redux/productLists/operations.js';
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
  const totalPages = useSelector(selectTotalPages);
  const allProducts = useSelector(selectAllProductsList);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const category = useSelector(selectCategory);
  const keyword = useSelector(selectKeyword);

  const sortParams = useSelector(selectSortParams);
  const [allowScroll, setAllowScroll] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (limit === null) return;
    dispatch(
      fetchAllProducts({
        limit,
        page,
        category,
        keyword,
        ...sortParams,
      })
    );
  }, [page, category, keyword, sortParams, limit, dispatch]);

  useEffect(() => {
    if (allowScroll === null) return;
    scrollSection(sectionRef, windowWidth);
  }, [allowScroll, windowWidth]);

  return (
    <section
      ref={sectionRef}
      className={clsx(css.section, {
        [css.optionalContainer]:
          totalPages === 1 ||
          totalPages === page ||
          allProducts.length === 0 ||
          error,
      })}
    >
      <h2 className="visually-hidden">Organic Food</h2>
      {loading && <OrganicFood className={css.loader} />}
      {error && <p>Error</p>}
      {allProducts.length === 0 && !loading ? <NothingFound /> : null}
      {allProducts.length > 0 && !loading ? <MainProductList /> : null}

      {totalPages > 1 && <Pagination setter={setAllowScroll} />}
    </section>
  );
};

export default MainProductsSection;
