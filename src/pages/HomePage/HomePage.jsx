import { Container } from 'shared';
import {
  Hero,
  FiltersBar,
  MainProductsSection,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';
import css from './HomePages.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProductCategories,
} from '@redux/productLists/operations.js';
import { useWindowSize } from '../../hooks/useWindowSize.js';
import { desktop, mobile, tablet } from 'constants';
import { changeLimit } from '../../redux/requestParams/slice.js';
import { selectLimit } from '../../redux/requestParams/selectors.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const limit = useSelector(selectLimit);

  useEffect(() => {
    if (limit !== null) return;

    dispatch(fetchProductCategories());
    dispatch(fetchPopularProducts());
    dispatch(fetchDiscountProducts());
  }, [dispatch, limit]);

  useEffect(() => {
    let perPageLimit;
    if (windowWidth >= desktop.width) {
      perPageLimit = desktop.perPage;
    } else if (windowWidth >= tablet.width) {
      perPageLimit = tablet.perPage;
    } else {
      perPageLimit = mobile.perPage;
    }
    if (perPageLimit === limit) return;
    dispatch(changeLimit(perPageLimit));
  }, [dispatch, windowWidth, limit]);

  return (
    <>
      <Hero />
      <FiltersBar />
      <Container className={css.container}>
        <MainProductsSection />
        <aside>
          <PopularProductsSection />
          <DiscountProductsSection />
        </aside>
      </Container>
    </>
  );
};

export default HomePage;
