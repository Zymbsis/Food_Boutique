import { useDispatch, useSelector } from 'react-redux';
import { selectRequestParams } from '@redux/requestParams/slice';
import { changePage } from '@redux/requestParams/slice';
import { ProductNavArrowButton } from 'shared';

import clsx from 'clsx';
import css from './ProductNavigation.module.css';
import { useMediaQuery } from 'react-responsive';
import { createButtonPanel } from '../.helpers/createButtonPanel';

const ProductNavigation = ({ totalPages, setter }) => {
  const dispatch = useDispatch();
  const { page } = useSelector(selectRequestParams);
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const buttonPanel = createButtonPanel(totalPages, page, isMobile);

  return (
    <div className={css.navWrapper}>
      {(isMobile && totalPages > 2) || (!isMobile && totalPages > 4) ? (
        <div className={clsx(css.arrowButtonWrapper, css.testWrapper)}>
          <ProductNavArrowButton
            iconId="doubleArrow"
            handleClick={() => {
              dispatch(changePage(1));
              setter(prev => prev + 1);
            }}
            isDisabled={page === 1}
          />
          <ProductNavArrowButton
            iconId="singleArrow"
            handleClick={() => {
              dispatch(changePage(page - 1));
              setter(prev => prev + 1);
            }}
            isDisabled={page === 1}
          />
        </div>
      ) : (
        <></>
      )}

      {Array.isArray(buttonPanel) &&
        buttonPanel.map((item, index) => (
          <button
            key={index}
            type="button"
            className={clsx(css.button, {
              [css.activeButton]: page === item,
            })}
            onClick={() => {
              dispatch(changePage(item));
              setter(prev => prev + 1);
            }}
          >
            {item}
          </button>
        ))}

      {(isMobile && totalPages > page + 1) ||
      (!isMobile && totalPages > page + 3) ? (
        <span>. . .</span>
      ) : (
        <></>
      )}

      {(isMobile && totalPages > 2) || (!isMobile && totalPages > 4) ? (
        <div className={css.arrowButtonWrapper}>
          <ProductNavArrowButton
            iconId="singleArrow"
            handleClick={() => {
              dispatch(changePage(page + 1));
              setter(prev => prev + 1);
            }}
            isDisabled={totalPages === page}
          />
          <ProductNavArrowButton
            iconId="doubleArrow"
            handleClick={() => {
              dispatch(changePage(totalPages));
              setter(prev => prev + 1);
            }}
            isDisabled={totalPages === page}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductNavigation;
