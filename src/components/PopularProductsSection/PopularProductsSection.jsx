import { Title } from 'shared';
import { PopularProductsList } from 'components';

const PopularProductsSection = () => {
  return (
    <section className="xl:pr-1">
      <Title>Popular products</Title>
      <PopularProductsList />
    </section>
  );
};

export default PopularProductsSection;
