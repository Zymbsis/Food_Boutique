import { CloseButton, Icon } from 'shared';
import css from './CartProductItem.module.css';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import { cart } from 'constants';

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
        <ProductCardInfo product={product} renderLocation={cart} />
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
