import { useEffect, useState } from 'react';
import css from './ProductCardModal.module.css';
import { fetchProductById } from '../../services/foodBoutiqueProductsApi.js';
import { Icon, OrganicFood, ProductDescription, ProductName } from 'shared';

const ProductCardModal = ({ _id, isInCart, handleClick }) => {
  const [productCard, setProductCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchProductById(_id);
        setProductCard(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, [_id]);

  if (isLoading)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFood className={css.loader} />
      </div>
    );

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
        <div className={css.cardPrice}>
          <span>{`$${productCard.price?.toFixed(2)}`}</span>
          <button type="button" onClick={handleClick}>
            {isInCart ? 'Delete from' : 'Add to'} <Icon iconId="cart" />
          </button>
        </div>
      </div>
    )
  );
};

export default ProductCardModal;
