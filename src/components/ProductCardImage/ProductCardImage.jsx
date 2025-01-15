import { use } from 'react';
import { Icon } from 'shared';
import { ModalContext } from '../Modal/ModalProvider.jsx';
import { ProductCardModal } from '../index.js';

const ProductCartImage = ({ className, name, img, is10PercentOff, _id }) => {
  const { openModal } = use(ModalContext);
  const handleOpenModal = () => {
    openModal(ProductCardModal, { _id });
  };

  return (
    <div
      onClick={handleOpenModal}
      className={`relative cursor-pointer rounded-[10px] bg-bgPrimary ${className}`}
    >
      <img src={img} alt={name} className={`h-full object-cover`} />
      {is10PercentOff && (
        <Icon
          iconId="discount"
          className="absolute right-[-5px] top-[-13px] size-[60px] animate-rotate"
        ></Icon>
      )}
    </div>
  );
};

export default ProductCartImage;
