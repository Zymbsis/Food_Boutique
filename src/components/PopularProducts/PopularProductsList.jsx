import { useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularProducts } from '@redux/productLists/operations.js';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';
import { ProductCardModal } from 'components';
import { ModalContext } from '../Modal/ModalProvider.jsx';
import PopularProductItem from './PopularProductItem.jsx';

const popularProductsClasses = {
  list: 'md-xl:flex-row flex flex-col flex-wrap gap-[13px]',
  item: 'relative cursor-pointer h-[98px] flex gap-[10px] p-3 rounded-[10px] bg-bgSecondary md-xl:w-[275px]',
};

const PopularProductsList = () => {
  const dispatch = useDispatch();
  const { openModal } = use(ModalContext);
  const data = useSelector(selectPopularProductsList);

  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  useEffect(() => {
    if (data.length) return;

    dispatch(fetchPopularProducts());
  }, [data, dispatch]);

  return (
    !!data.length && (
      <ul className={popularProductsClasses.list}>
        {data.map(product => (
          <li
            className={popularProductsClasses.item}
            key={product._id}
            onClick={() => handleOpenModal(product._id)}
          >
            <PopularProductItem {...product} />
          </li>
        ))}
      </ul>
    )
  );
};

export default PopularProductsList;
