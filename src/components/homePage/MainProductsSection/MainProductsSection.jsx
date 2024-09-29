import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductListTitle, OrganicFood } from 'shared';
import { useWindowSize } from 'hooks';
import { fetchProducts } from 'services';
import {
  selectLimit,
  changeLimit,
  selectRequestParams,
  selectPage,
  selectSortParams,
} from '@redux/requestParams/slice';
import MainProductList from './MainProductList/MainProductList';
import ProductNavigation from './ProductNavigation/ProductNavigation';
import NothingFound from './NothingFound/NothingFound';
import clsx from 'clsx';
import css from './MainProductsSection.module.css';
import { scrollSection } from './.helpers/scrollIntoView';
import {
  selectIsDesktop,
  selectIsMobile,
  selectIsTablet,
} from '../../../redux/windowSize/slice';

const MainProductsSection = () => {
  const windowWidth = useWindowSize();
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const requestParams = useSelector(selectRequestParams);
  const sortParams = useSelector(selectSortParams);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [allowScroll, setAllowScroll] = useState(null);
  const sectionRef = useRef(null);
  const isMobile = useSelector(selectIsMobile);

  const getLimit = useCallback(windowWidth => {
    if (windowWidth >= 1440) {
      return 9;
    } else if (windowWidth < 1440 && windowWidth > 768) {
      return 8;
    } else {
      return 6;
    }
  }, []);

  // useEffect(() => {
  //   if (isDesktop) {
  //     dispatch(changeLimit(9));
  //   } else if (isTablet) {
  //     dispatch(changeLimit(8));
  //   } else {
  //     dispatch(changeLimit(6));
  //   }
  // }, [isDesktop, isTablet, dispatch]);

  useEffect(() => {
    const newLimit = getLimit(windowWidth);
    if (newLimit === limit) return;
    dispatch(changeLimit(newLimit));
  }, [dispatch, getLimit, windowWidth, limit]);

  useEffect(() => {
    if (limit === null) return;
    async function getProducts() {
      try {
        setError(false);
        setLoading(true);
        const { results, totalPages } = await fetchProducts({
          ...requestParams,
          ...sortParams,
        });

        setAllProducts(results);
        setTotalPages(totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [requestParams, sortParams, limit, setTotalPages]);

  useEffect(() => {
    if (allowScroll === null) return;
    scrollSection(sectionRef, isMobile);
  }, [allowScroll, isMobile]);

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
      <ProductListTitle className="visually-hidden">
        Organic Food
      </ProductListTitle>
      {loading && <OrganicFood className={css.loader} />}
      {error && <p>Error</p>}
      {allProducts.length === 0 && !loading ? <NothingFound /> : null}
      {allProducts.length > 0 && !loading ? (
        <MainProductList productList={allProducts} />
      ) : null}

      {totalPages > 1 && (
        <ProductNavigation totalPages={totalPages} setter={setAllowScroll} />
      )}
    </section>
  );
};

export default MainProductsSection;
