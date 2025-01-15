import { ProductCardImage, ProductCardAction } from 'components';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';

const DiscountProductItem = ({ ...product }) => {
  return (
    <>
      <ProductCardImage
        img={product.img}
        name={product.name}
        is10PercentOff={product.is10PercentOff}
        _id={product._id}
        className="mb-[16px] h-[150px] px-[95px] py-[18px] xl:px-[69px] xl:py-[22px]"
      />
      <div className="flex items-center justify-between gap-1">
        <ProductCardTitle className="mb-[0] flex-1">{product.name}</ProductCardTitle>
        <ProductCardAction className="items-center gap-2" price={product.price} product={product} />
      </div>
    </>
  );
};

export default DiscountProductItem;
