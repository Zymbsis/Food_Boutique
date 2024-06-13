import { AllProducts } from 'modules';
import {
  Hero,
  FiltersBar,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';
import { Container } from 'shared';

import css from './HomePages.module.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FiltersBar />
      <section className={css.section}>
        <Container className={css.container}>
          <AllProducts />
          <aside>
            <PopularProductsSection />
            <DiscountProductsSection />
          </aside>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
