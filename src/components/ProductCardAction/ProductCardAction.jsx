import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'shared';
import { formatPrice } from 'utils';
import { makeSelectIsInCart } from '../../redux/cart/selectors.js';
import { addProduct, deleteProduct } from '../../redux/cart/slice.js';

const getCartButtonClasses = (price, buttonCaption) => {
  let baseButtonClasses = 'w-fit rounded-full transition-colors';
  let cartIconSize = 18;

  if (!price) {
    baseButtonClasses +=
      ' hover:bg-btnHovered bg-bgPrimary p-[4px] text-btnPrimary hover:text-bgPrimary';
    cartIconSize = 12;
  } else {
    baseButtonClasses += ' p-2 hover:bg-btnHovered bg-btnPrimary text-bgPrimary';
  }

  if (buttonCaption) {
    baseButtonClasses +=
      ' text-14 md:text-16 flex items-center gap-[10px] px-6 py-3 font-medium md:px-7 md:py-[10px]';
  }

  return { baseButtonClasses, cartIconSize };
};

const ProductCardAction = ({ className, price, buttonCaption, product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(makeSelectIsInCart(product._id));
  const iconId = !isInCart ? 'cart' : 'check';
  const caption = buttonCaption ? (isInCart ? 'Remove from' : 'Add to') : null;

  const handleToggleCart = () => {
    isInCart
      ? dispatch(deleteProduct(product._id))
      : dispatch(addProduct({ ...product, quantity: 1 }));
  };

  const formattedPrice = formatPrice(price);
  const { baseButtonClasses, cartIconSize } = getCartButtonClasses(price, buttonCaption);

  return (
    <div className={`flex items-end justify-between ${className}`}>
      {price && (
        <span className="text-18 font-medium text-fontPrimary md:text-20">{formattedPrice}</span>
      )}
      <button type="button" onClick={handleToggleCart} className={baseButtonClasses}>
        {caption && <span>{caption}</span>}
        <Icon iconId={iconId} width={cartIconSize} height={cartIconSize} />
      </button>
    </div>
  );
};

export default ProductCardAction;
