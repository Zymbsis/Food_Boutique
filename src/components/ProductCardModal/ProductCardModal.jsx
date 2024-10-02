import { useEffect, useState } from 'react';
import css from './ProductCardModal.module.css';
import { fetchProductById } from '../../services/foodBoutiqueProductsApi.js';
import {
  Icon,
  OrganicFood,
  ProductDescription,
  ProductName,
} from '../../shared/index.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  deleteProduct,
  selectCart,
} from '../../redux/cart/slice.js';

const ProductCardModal = ({ id }) => {
  const dispatch = useDispatch();
  const [productCard, setProductCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector(selectCart);
  const isInCart = cart.some(item => item._id === productCard?._id);

  const handleClick = () => {
    isInCart
      ? dispatch(deleteProduct(productCard))
      : dispatch(addProduct({ ...productCard, quantity: 1 }));
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchProductById(id);
        console.log();

        setProductCard(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, [id]);

  if (isLoading)
    return (
      <div className={css.loaderWrapper}>
        <OrganicFood className={css.loader} />
      </div>
    );
  return (
    productCard !== null && (
      <div className={css.cardWrapper}>
        <div className={css.cardImgWrapper}>
          <img
            src={productCard.img}
            alt={productCard.name}
            width={160}
            height={160}
          />
        </div>
        <ProductName className={css.cardName}>{productCard.name}</ProductName>
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
