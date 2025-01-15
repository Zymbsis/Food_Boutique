import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDiscountProductsList } from '@redux/productLists/selectors.js';
import { fetchDiscountProducts } from '@redux/productLists/operations.js';
import { DiscountProductItem } from 'components';
import css from './DiscountProductsList.module.css';

const DiscountProductsList = () => {
  const dispatch = useDispatch();
  const discountProducts = useSelector(selectDiscountProductsList);

  useEffect(() => {
    if (discountProducts.length) return;

    dispatch(fetchDiscountProducts());
  }, [discountProducts, dispatch]);

  return (
    !!discountProducts.length && (
      <ul className={css.productList}>
        {discountProducts.map(product => (
          <li
            className="relative h-[232px] rounded-[15px] bg-bgSecondary p-4 md-lg:flex-shrink-0"
            key={product._id}
          >
            <DiscountProductItem {...product} />
          </li>
        ))}
      </ul>
    )
  );
};

export default DiscountProductsList;
