import { ProductListTitle } from 'shared';

import css from './DiscountProductsSection.module.css';

const DiscountProductsSection = () => {
  return (
    <section className={css.section}>
      <ProductListTitle className={css.title}>
        Discount products
      </ProductListTitle>
      <DiscountProductsSection />
    </section>
  );
};

export default DiscountProductsSection;
