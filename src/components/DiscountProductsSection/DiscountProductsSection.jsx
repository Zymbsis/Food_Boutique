import { ProductListTitle } from 'shared';
import DiscountProductList from '../DiscountProductList/DiscountProductList.jsx';

const DiscountProductsSection = () => {
  return (
    <section>
      <ProductListTitle>Discount products</ProductListTitle>
      <DiscountProductList />
    </section>
  );
};

export default DiscountProductsSection;
