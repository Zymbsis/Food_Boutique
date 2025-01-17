import { ProductCardImage, ProductCardAction } from 'components';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';
import ProductCardAttributes from '../ProductCardAttributes/ProductCardAttributes.jsx';

const AllProductItem = ({ ...product }) => {
  return (
    <>
      <ProductCardImage
        img={product.img}
        name={product.name}
        is10PercentOff={product.is10PercentOff}
        className="mb-5 h-[178px] px-[78px] py-[19px] xl:px-[57px]"
      />
      <ProductCardTitle>{product.name}</ProductCardTitle>
      <ProductCardAttributes
        className="line-clamp-2 flex flex-wrap gap-y-2"
        category={product.category}
        size={product.size}
        popularity={product.popularity}
      />
      <ProductCardAction className="flex-1" price={product.price} product={product} />
    </>
  );
};

export default AllProductItem;
