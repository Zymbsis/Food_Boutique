import { useSelector } from 'react-redux';
import { selectAllProductsList } from '@redux/productLists/selectors.js';
import MainProductItem from '../MainProductItem/MainProductItem';
import css from './MainProductList.module.css';
import { useModalContext } from '../../../../hooks/useContext.js';
import ProductCardModal from '../../../ProductCardModal/ProductCardModal.jsx';

const MainProductList = () => {
  const allProducts = useSelector(selectAllProductsList);
  const { openModal } = useModalContext();
  const handleOpenModal = _id => {
    openModal(ProductCardModal, { _id });
  };
  return (
    <>
      <h2 className="visually-hidden">Organic Food</h2>
      <ul className={css.productList}>
        {allProducts.map(product => (
          <li className={css.productItem} key={product._id}>
            <MainProductItem
              product={product}
              handleOpenModal={handleOpenModal}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainProductList;
