import { Container } from 'shared';
import {
  Hero,
  FiltersBar,
  MainProductsSection,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';
import css from './HomePages.module.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FiltersBar />
      <section className={css.section}>
        <Container className={css.container}>
          <MainProductsSection />
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
