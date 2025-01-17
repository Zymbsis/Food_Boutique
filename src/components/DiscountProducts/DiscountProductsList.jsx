import { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiscountProductsList } from '@redux/productLists/selectors.js';
import { fetchDiscountProducts } from '@redux/productLists/operations.js';
import { ProductCardModal } from 'components';
import { ModalContext } from '../Modal/ModalProvider.jsx';
import DiscountProductItem from './DiscountProductItem.jsx';

const discountProductsClasses = {
  list: 'md-xl:flex-row md-xl:gap-8 md-xl:h-auto md-xl:overflow-y-hidden md-xl:overflow-x-auto grayScrollbar flex h-[484px] flex-col gap-5 overflow-y-auto overflow-x-hidden',
  item: 'md-xl:flex-shrink-0 md-xl:w-[336px] relative h-[232px] cursor-pointer rounded-[15px] bg-bgSecondary p-4',
};

const DiscountProductsList = () => {
  const dispatch = useDispatch();
  const { openModal } = use(ModalContext);
  const discountProducts = useSelector(selectDiscountProductsList);

  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  useEffect(() => {
    if (discountProducts.length) return;

    dispatch(fetchDiscountProducts());
  }, [discountProducts, dispatch]);

  return (
    !!discountProducts.length && (
      <ul className={discountProductsClasses.list}>
        {discountProducts.map(product => (
          <li
            className={discountProductsClasses.item}
            key={product._id}
            onClick={() => handleOpenModal(product._id)}
          >
            <DiscountProductItem {...product} />
          </li>
        ))}
      </ul>
    )
  );
};

export default DiscountProductsList;
