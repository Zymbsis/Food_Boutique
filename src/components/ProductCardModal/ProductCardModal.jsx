import { useEffect, useState } from 'react';
import { MODAL } from 'constants';
import { fetchProductById } from 'services';
import {
  OrganicFoodBadge,
  ProductCardImage,
  ProductCardInfo,
  ProductCardAction,
} from 'components';
import css from './ProductCardModal.module.css';

const ProductCardModal = ({ _id }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchProductById(_id);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, [_id]);

  if (isLoading)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFoodBadge className={css.loader} />
      </div>
    );

  if (isError) return <div className={css.loaderWrapper}>Error</div>;

  return (
    product !== null && (
      <div className={css.cardWrapper}>
        <div className={css.cardInfo}>
          <ProductCardImage {...product} renderLocation={MODAL} />
          <div className={css.textContent}>
            <ProductCardInfo {...product} renderLocation={MODAL} />
            <div className={css.descWrapper}>
              <p className={css.cardDesc}>{product.desc}</p>
            </div>
          </div>
        </div>
        <ProductCardAction {...product} renderLocation={MODAL} />
      </div>
    )
  );
};

export default ProductCardModal;
