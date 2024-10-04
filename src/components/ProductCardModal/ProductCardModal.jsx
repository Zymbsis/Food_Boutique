import { useEffect, useState } from 'react';
import { modal } from 'constants';
import { fetchProductById } from 'services';
import { ProductDescription, ProductName } from 'shared';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
import css from './ProductCardModal.module.css';
import OrganicFoodBadge from '../OrganicFoodBadge/OrganicFoodBadge.jsx';

const ProductCardModal = ({ product }) => {
  const [productCard, setProductCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchProductById(product._id);
        setProductCard(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, [product]);

  if (isLoading)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFoodBadge className={css.loader} />
      </div>
    );

  if (isError) return <div className={css.loaderWrapper}>Error</div>;

  return (
    productCard !== null && (
      <div className={css.cardWrapper}>
        <div className={css.cardInfo}>
          <div className={css.cardImgWrapper}>
            <img
              src={productCard.img}
              alt={productCard.name}
              width={160}
              height={160}
            />
          </div>
          <div className={css.textContent}>
            <ProductName className={css.cardName}>
              {productCard.name}
            </ProductName>
            <ul className={css.cardFeatures}>
              <ProductDescription
                product={{
                  category: productCard.category,
                  size: productCard.size,
                  popularity: productCard.popularity,
                }}
              />
            </ul>
            <div className={css.descWrapper}>
              <p className={css.cardDesc}>{productCard.desc}</p>
            </div>
          </div>
        </div>
        <CartItemControl product={product} renderLocation={modal} />
      </div>
    )
  );
};

export default ProductCardModal;
