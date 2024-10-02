import { ProductListTitle } from 'shared';
import PopularProductList from '../PopularProductList/PopularProductList';

const PopularProductsSection = () => {
  return (
    <section>
      <ProductListTitle>Popular products</ProductListTitle>
      <PopularProductList />
    </section>
  );
};

export default PopularProductsSection;
