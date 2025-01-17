import { useEffect, useRef, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
} from '@redux/productLists/selectors.js';
import {
  selectLimit,
  selectPage,
  selectRequestParamsExceptPage,
} from '@redux/requestParams/selectors.js';
import { fetchAllProducts } from '@redux/productLists/operations.js';
import { ProductCardModal } from 'components';
import { ModalContext } from '../Modal/ModalProvider.jsx';
import AllProductItem from './AllProductItem.jsx';

const allProductsClasses = {
  list: 'md-xl:mb-[50px] mb-10 flex flex-col flex-wrap gap-5 md:flex-row md:gap-8 xl:mb-0 xl:gap-x-4 xl:gap-y-10',
  item: 'flex h-[356px] cursor-pointer flex-col rounded-[20px] bg-bgSecondary p-5 md:h-[360px] md:w-[336px] xl:h-[363px] xl:w-[295px]',
};

const AllProductsList = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const { openModal } = use(ModalContext);

  const requestParams = useSelector(selectRequestParamsExceptPage);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);
  const allProducts = useSelector(selectAllProductsList);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);

  const isProductListVisible = !!allProducts.length && !loading && !error;
  const offset = limit === 6 ? 74 : 96;

  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  useEffect(() => {
    if (limit === null) return;

    dispatch(fetchAllProducts({ ...requestParams, page }));

    if (!listRef.current) return;

    const listPosition = listRef.current ? listRef.current.getBoundingClientRect().top : 0;
    const elementPosition = listPosition + window.scrollY - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }, [requestParams, limit, page, dispatch, offset]);

  return (
    isProductListVisible && (
      <ul className={allProductsClasses.list} ref={listRef}>
        {allProducts.map(product => (
          <li
            className={allProductsClasses.item}
            key={product._id}
            onClick={() => handleOpenModal(product._id)}
          >
            <AllProductItem {...product} />
          </li>
        ))}
      </ul>
    )
  );
};

export default AllProductsList;
