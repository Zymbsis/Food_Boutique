import { ProductListTitle } from 'shared';
import { DiscountProductsList } from 'components';

const DiscountProductsSection = () => {
  return (
    <section>
      <ProductListTitle>Discount products</ProductListTitle>
      <DiscountProductsList />
    </section>
  );
};

export default DiscountProductsSection;
