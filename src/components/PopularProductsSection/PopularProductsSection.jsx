import { Title } from 'shared';
import { PopularProductsList } from 'components';
import css from './PopularProductsSection.module.css';

const PopularProductsSection = () => {
  return (
    <section className={css.section}>
      <Title>Popular products</Title>
      <PopularProductsList />
    </section>
  );
};

export default PopularProductsSection;
