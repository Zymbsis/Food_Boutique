import { useEffect, useState } from 'react';
import { fetchProductById } from 'services';
import {
  OrganicFoodBadge,
  ProductCardImage,
  ProductCardAction,
  ProductCardAttributes,
} from 'components';
import css from './ProductCardModal.module.css';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';

const ProductCardModal = ({ _id }) => {
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsPending(true);
        const data = await fetchProductById(_id);
        setProduct(data);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    })();
  }, [_id]);

  if (isPending)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFoodBadge className="static" />
      </div>
    );

  if (isError) return <div className={css.loaderWrapper}>Error</div>;

  return (
    product !== null && (
      <div className={css.cardWrapper}>
        <div className={css.cardInfo}>
          <ProductCardImage
            img={product.img}
            name={product.name}
            className="mb-5 h-[212px] flex-shrink-0 cursor-auto px-[67px] py-[26px] md:mb-0 md:w-60 md:px-[26px]"
          />
          <div className="flex flex-col">
            <ProductCardTitle className="mb-[10px] flex-shrink-0 whitespace-normal">
              {product.name}
            </ProductCardTitle>
            <ProductCardAttributes
              className="mb-4 flex flex-wrap gap-y-2 md:mb-5"
              category={product.category}
              size={product.size}
              popularity={product.popularity}
            />
            <p className={css.descWrapper}>
              <span className={css.cardDesc}>{product.desc}</span>
            </p>
          </div>
        </div>
        <ProductCardAction price={product.price} product={product} buttonCaption />
      </div>
    )
  );
};

export default ProductCardModal;
