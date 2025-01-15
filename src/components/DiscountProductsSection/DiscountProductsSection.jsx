import { Title } from 'shared';
import { DiscountProductsList } from 'components';

const classes =
  'md-lg:h-auto md-lg:overflow-y-hidden md-lg:overflow-x-auto greenScrollbar h-[484px] overflow-y-auto overflow-x-hidden';

const DiscountProductsSection = () => {
  return (
    <section>
      <Title>Discount products</Title>
      <div className={classes}>
        <DiscountProductsList />
      </div>
    </section>
  );
};

export default DiscountProductsSection;
