import { useEffect } from 'react';
import { Container } from 'shared';
import {
  Hero,
  FiltersBar,
  AllProductsSection,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';
import css from './HomePages.module.css';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <FiltersBar />
      <Container className={css.container}>
        <AllProductsSection />
        <aside>
          <PopularProductsSection />
          <DiscountProductsSection />
        </aside>
      </Container>
    </>
  );
};

export default HomePage;
