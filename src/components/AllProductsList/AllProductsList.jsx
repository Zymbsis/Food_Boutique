import { useSelector } from 'react-redux';
import { useModalContext } from 'hooks';
import { selectAllProductsList } from '@redux/productLists/selectors.js';
import { AllProductItem, ProductCardModal } from 'components';
import css from './AllProductsList.module.css';

const AllProductsList = () => {
  const { openModal } = useModalContext();
  const allProducts = useSelector(selectAllProductsList);
  const handleOpenModal = _id => openModal(ProductCardModal, { _id });

  return (
    <>
      <h2 className="visually-hidden">Organic Food</h2>
      <ul className={css.productList}>
        {allProducts.map(product => (
          <li className={css.productItem} key={product._id}>
            <AllProductItem
              {...product}
              handleOpenModal={() => handleOpenModal(product._id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllProductsList;
