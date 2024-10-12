import PopularProductItem from '../PopularProductItem/PopularProductItem';
import css from './PopularProductList.module.css';
import { useSelector } from 'react-redux';
import { selectPopularProductsList } from '@redux/productLists/selectors.js';
import { useModalContext } from '../../hooks/useContext.js';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';

const PopularProductList = () => {
  const data = useSelector(selectPopularProductsList);
  const { openModal } = useModalContext();
  const handleOpenModal = _id => {
    openModal(ProductCardModal, { _id });
  };

  return (
    <ul className={css.productList}>
      {data.length > 0 &&
        data.map(product => (
          <li className={css.productItem} key={product._id}>
            <PopularProductItem
              product={product}
              handleOpenModal={handleOpenModal}
            />
          </li>
        ))}
    </ul>
  );
};

export default PopularProductList;
