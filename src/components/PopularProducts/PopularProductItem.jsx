import { ProductCardImage, ProductCardAction, ProductCardAttributes } from 'components';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';

const PopularProductItem = ({ ...product }) => {
  return (
    <>
      <ProductCardImage
        img={product.img}
        name={product.name}
        className="size-[74px] flex-shrink-0 p-[9px]"
      />
      <div className="w-[207px] md:w-[150px]">
        <ProductCardTitle className="mb-[12px] md:mb-[10px]">{product.name}</ProductCardTitle>
        <ProductCardAttributes
          className="line-clamp-2"
          category={product.category}
          size={product.size}
          popularity={product.popularity}
        />
      </div>
      <ProductCardAction className="absolute right-3 top-3" product={product} />
    </>
  );
};

export default PopularProductItem;
