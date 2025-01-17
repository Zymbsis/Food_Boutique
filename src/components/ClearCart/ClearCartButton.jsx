import { useDispatch } from 'react-redux';
import { Icon } from 'shared';
import { deleteAllProducts } from '@redux/cart/slice.js';

const ClearCartButton = () => {
  const dispatch = useDispatch();
  const handleDeleteAll = () => dispatch(deleteAllProducts());

  return (
    <button
      type="button"
      onClick={handleDeleteAll}
      className="mb-[30px] ml-auto flex h-[24px] w-fit items-center gap-2 text-14 font-medium text-fontPrimary md:mb-10 md:text-16 xl:mb-11"
    >
      <span className="pt-[2px]">Delete all</span>
      <Icon iconId="close" width={24} height={24} />
    </button>
  );
};

export default ClearCartButton;
