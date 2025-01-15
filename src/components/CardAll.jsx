import { use } from 'react';
import { ModalContext } from './Modal/ModalProvider.jsx';
import { ProductCardModal } from './index.js';
import { useCart } from '../hooks/useCart.js';

const withProductLogic = Component => {
  const ProductWithLogic = ({ ...product }) => {
    const { isInCart, handleToggleCart } = useCart(product);
    const { openModal } = use(ModalContext);

    const handleOpenModal = _id => openModal(ProductCardModal, { _id });
    const iconId = !isInCart ? 'cart' : 'check';

    return (
      <Component
        product={product}
        handleOpenModal={handleOpenModal}
        handleToggleCart={handleToggleCart}
        iconId={iconId}
      />
    );
  };
  return ProductWithLogic;
};

export default withProductLogic;
