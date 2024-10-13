import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scrollIntoView } from 'helpers';
import { useWindowSize } from 'hooks';
import { fetchAllProducts } from '@redux/productLists/operations.js';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
  selectTotalPages,
} from '@redux/productLists/selectors.js';
import {
  selectPage,
  selectRequestParamsExceptPage,
} from '@redux/requestParams/selectors.js';
import {
  AllProductsList,
  Pagination,
  NothingFound,
  OrganicFoodBadge,
} from 'components';
import css from './AllProductsSection.module.css';

const AllProductsSection = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const [firstRender, setFirstRender] = useState(true);
  const sectionRef = useRef(null);
  const totalPages = useSelector(selectTotalPages);
  const allProducts = useSelector(selectAllProductsList);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);
  const requestParams = useSelector(selectRequestParamsExceptPage);
  const page = useSelector(selectPage);

  useEffect(() => {
    if (requestParams.limit === null) return;
    if (firstRender && allProducts.length) return;
    dispatch(fetchAllProducts({ ...requestParams, page }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams, page, dispatch]);

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
        <OrganicFoodBadge className={css.loader} />
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
      <AllProductsList /> {totalPages > 1 && <Pagination />}
    </section>
  );
};

export default AllProductsSection;
