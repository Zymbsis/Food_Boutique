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
      onClick={_id ? handleOpenModal : null}
      className={`relative rounded-[10px] bg-bgPrimary ${className} ${_id ? 'cursor-pointer' : ''}`}
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
