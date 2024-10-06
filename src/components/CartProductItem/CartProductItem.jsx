import { CloseButton, ProductDescription, ProductName } from 'shared';
import css from './CartProductItem.module.css';

const CartProductItem = ({ product, handleDeleteProduct }) => {
  return (
    <>
      <CloseButton
        className={css.deleteBtn}
        handleClick={() => handleDeleteProduct(product._id)}
      />
      <div className={css.imgWrapper}>
        <img src={product.img} alt={product.name} width={72} height={72} />
      </div>
      <div className={css.textWrapper}>
        <ProductName className={css.name}>{product.name}</ProductName>
        <ul className={css.featuresList}>
          <ProductDescription
            product={{
              category: product.category,
              size: product.size,
              popularity: product.popularity,
            }}
          />
        </ul>
        <span className={css.price}>{`$${product.price.toFixed(2)}`}</span>
      </div>
    </>
  );
};

export default CartProductItem;
