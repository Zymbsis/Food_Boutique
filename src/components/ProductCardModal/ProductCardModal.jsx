import { useEffect, useState } from 'react';
import { modal } from 'constants';
import { fetchProductById } from 'services';
import OrganicFoodBadge from '../OrganicFoodBadge/OrganicFoodBadge.jsx';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
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
          <ProductCartImage product={product} renderLocation={modal} />
          <div className={css.textContent}>
            <ProductCardInfo product={product} renderLocation={modal} />
            <div className={css.descWrapper}>
              <p className={css.cardDesc}>{product.desc}</p>
            </div>
          </div>
        </div>
        <CartItemControl product={product} renderLocation={modal} />
      </div>
    )
  );
};

export default ProductCardModal;
