import { CloseButton, Icon } from 'shared';
import ProductCardAttributes from '../ProductCardAttributes/ProductCardAttributes.jsx';
import {
  decreaseProductQuantity,
  deleteProduct,
  increaseProductQuantity,
} from '../../redux/cart/slice.js';
import { useDispatch } from 'react-redux';
import css from './CartProductItem.module.css';
import { ProductCardImage } from '../index.js';
import ProductCardTitle from '../ProductCardTitle/ProductCardTitle.jsx';

const CartProductItem = ({ ...product }) => {
  const dispatch = useDispatch();
  const handleDeleteProduct = event => {
    event.stopPropagation();
    dispatch(deleteProduct(product._id));
  };
  const handleChangeQuantity = (event, increase) => {
    event.stopPropagation();
    increase
      ? dispatch(increaseProductQuantity(product._id))
      : dispatch(decreaseProductQuantity(product._id));
  };

  return (
    <>
      <CloseButton className={css.deleteBtn} onClick={handleDeleteProduct} />
      <ProductCardImage
        img={product.img}
        name={product.name}
        _id={product._id}
        className="size-[100px] flex-shrink-0 bg-bgSecondary p-[18px] md:size-[120px] md:p-[24px]"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex-1">
          <ProductCardTitle className="max-w-[200px] md:max-w-full">
            {product.name}
          </ProductCardTitle>
          <ProductCardAttributes
            className="flex flex-wrap"
            category={product.category}
            size={product.size}
          />
        </div>

        <div className={css.productControl}>
          <span className={css.price}>${(product.price * product.quantity).toFixed(2)}</span>
          <div className={css.changeQuantity}>
            <button type="button" onClick={handleChangeQuantity}>
              <Icon iconId="symbol-minus" />
            </button>
            <span>{product.quantity}</span>
            <button type="button" onClick={event => handleChangeQuantity(event, true)}>
              <Icon iconId="symbol-plus" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductItem;
