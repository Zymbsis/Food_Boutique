const { ProductCardImage, ProductCardAction, ProductCardAttributes } = require('./index.js');
const { default: ProductCardTitle } = require('./ProductCardTitle/ProductCardTitle.jsx');

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

const MainProductItem = ({ ...product }) => {
  return (
    <>
      <ProductCardImage
        img={product.img}
        name={product.name}
        is10PercentOff={product.is10PercentOff}
        _id={product._id}
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

const PopularProductItem = ({ ...product }) => {
  return (
    <>
      <ProductCardImage
        img={product.img}
        name={product.name}
        _id={product._id}
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
