import { ProductListTitle } from 'shared';
import DiscountProductList from './DiscountProductList/DiscountProductList';

import css from './DiscountProductsSection.module.css';

const DiscountProductsSection = () => {
  return (
    <section className={css.section}>
      <ProductListTitle className={css.title}>
        Discount products
      </ProductListTitle>
      <DiscountProductList />
    </section>
  );
};

export default DiscountProductsSection;
