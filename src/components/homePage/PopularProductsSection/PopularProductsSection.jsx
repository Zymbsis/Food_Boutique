import { ProductListTitle } from 'shared';
import css from './PopularProductsSection.module.css';
import PopularProductList from './PopularProductList/PopularProductList';

const PopularProductsSection = () => {
  return (
    <section className={css.section}>
      <ProductListTitle>Popular products</ProductListTitle>
      <PopularProductList />
    </section>
  );
};

export default PopularProductsSection;
