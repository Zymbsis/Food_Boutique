import { ProductCardImage, ProductCardAction } from 'components';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';
import ProductCardAttributes from '../ProductCardAttributes/ProductCardAttributes.jsx';

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

export default MainProductItem;

// const MainProduct = ({ product, handleOpenModal, handleToggleCart, iconId }) => {
//   const { img, name, _id, is10PercentOff, category, size, popularity, price } = product;

//   return (
//     <>
//       <ProductCardImage
//         img={img}
//         name={name}
//         onClick={() => handleOpenModal(_id)}
//         is10PercentOff={is10PercentOff}
//         className="mb-5 h-[178px] px-[78px] py-[19px] xl:px-[57px]"
//       />
//       <ProductCardTitle className="mb-[10px] truncate">{product.name}</ProductCardTitle>
//       <ProductCardInfo
//         className="line-clamp-2 flex flex-wrap gap-y-2"
//         category={category}
//         size={size}
//         popularity={popularity}
//       />
//       <ProductCardAction
//         className="flex-1"
//         onClick={handleToggleCart}
//         iconId={iconId}
//         price={price}
//       />
//     </>
//   );
// };

// const MainProductItem = withProductLogic(MainProduct);
// export default MainProductItem;
