import { ProductListTitle } from 'shared';
import { PopularProductsList } from 'components';
import css from './PopularProductsSection.module.css';

const PopularProductsSection = () => {
  return (
    <section className={css.section}>
      <ProductListTitle>Popular products</ProductListTitle>
      <PopularProductsList />
    </section>
  );
};

export default PopularProductsSection;
