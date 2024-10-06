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
import { selectProductCategoriesList } from '@redux/productLists/selectors.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProductCategoriesList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data.length > 0) return;
    dispatch(fetchProductCategories());
    dispatch(fetchPopularProducts());
    dispatch(fetchDiscountProducts());
  });

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
