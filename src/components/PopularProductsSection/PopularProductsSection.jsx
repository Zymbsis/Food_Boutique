import { ProductListTitle } from 'shared';
import PopularProductList from '../PopularProductList/PopularProductList';
import css from './PopularProductsSection.module.css';

const PopularProductsSection = () => {
  return (
    <section className={css.section}>
      <ProductListTitle>Popular products</ProductListTitle>
      <PopularProductList />
    </section>
  );
};

export default PopularProductsSection;
