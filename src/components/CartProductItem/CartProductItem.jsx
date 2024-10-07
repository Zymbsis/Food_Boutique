import { CloseButton, Icon, ProductDescription, ProductName } from 'shared';
import css from './CartProductItem.module.css';

const CartProductItem = ({
  product,
  handleDeleteProduct,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
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
        <div className={css.productControl}>
          <span className={css.price}>{`$${(
            product.price * product.quantity
          ).toFixed(2)}`}</span>
          <div className={css.changeQuantity}>
            <button
              type="button"
              onClick={() => handleDecreaseQuantity(product._id)}
            >
              <Icon iconId="symbol-minus" />
            </button>
            <span>{product.quantity}</span>
            <button
              type="button"
              onClick={() => handleIncreaseQuantity(product._id)}
            >
              <Icon iconId="symbol-plus" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductItem;
