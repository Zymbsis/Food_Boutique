import css from './DiscountProductList.module.css';
import { selectDiscountProductsList } from '@redux/productLists/selectors.js';
import { useSelector } from 'react-redux';
import DiscountProductItem from '../DiscountProductItem/DiscountProductItem.jsx';
import { useModalContext } from '../../hooks/useContext.js';
import ProductCardModal from '../ProductCardModal/ProductCardModal.jsx';

const DiscountProductList = () => {
  const data = useSelector(selectDiscountProductsList);
  const { openModal } = useModalContext();
  const handleOpenModal = _id => {
    openModal(ProductCardModal, { _id });
  };

  return (
    <div className={css.innerContainer}>
      <ul className={css.productList}>
        {data.length > 0 &&
          data.map(product => (
            <li className={css.productItem} key={product._id}>
              <DiscountProductItem
                product={product}
                handleOpenModal={handleOpenModal}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DiscountProductList;
