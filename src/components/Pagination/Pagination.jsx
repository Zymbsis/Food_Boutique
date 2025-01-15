import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TABLET } from 'constants';
import { useWindowSize } from 'hooks';
import { createPaginationPageNumbers } from 'utils';
import { selectTotalPages } from '@redux/productLists/selectors.js';
import { selectPage } from '@redux/requestParams/selectors.js';
import { changePage } from '@redux/requestParams/slice';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './Pagination.module.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const [buttonPanel, setButtonPanel] = useState([]);
  const showNavigationArrows =
    (windowWidth < TABLET.vw_width && totalPages > 2) ||
    (windowWidth >= TABLET.vw_width && totalPages > 4);
  const showEllipsis =
    (windowWidth < TABLET.vw_width && totalPages > page + 1) ||
    (windowWidth >= TABLET.vw_width && totalPages > page + 3);

  useEffect(() => {
    const buttonArray = createPaginationPageNumbers(totalPages, page, windowWidth);
    setButtonPanel(buttonArray);
  }, [windowWidth, totalPages, page]);

  return (
    <div className={css.navWrapper}>
      {showNavigationArrows && (
        <div className={css.btnWrapper}>
          <button
            className={`${css.arrowBtn} ${css.rotatedBtn}`}
            disabled={page === 1}
            onClick={() => {
              dispatch(changePage(1));
            }}
            type="button"
          >
            <Icon iconId="doubleArrow" />
          </button>
          <button
            className={`${css.arrowBtn} ${css.rotatedBtn}`}
            disabled={page === 1}
            onClick={() => {
              dispatch(changePage(page - 1));
            }}
            type="button"
          >
            <Icon iconId="singleArrow" />
          </button>
        </div>
      )}

      <div className={css.btnWrapper}>
        {Array.isArray(buttonPanel) &&
          buttonPanel.map((item, index) => (
            <button
              key={index}
              type="button"
              className={clsx(css.numberBtn, {
                [css.activeBtn]: page === item,
              })}
              onClick={() => {
                dispatch(changePage(item));
              }}
            >
              {item}
            </button>
          ))}
        {showEllipsis && <span className={css.ellipsis}>...</span>}
      </div>

      {showNavigationArrows && (
        <div className={css.btnWrapper}>
          <button
            className={css.arrowBtn}
            disabled={totalPages === page}
            onClick={() => {
              dispatch(changePage(page + 1));
            }}
            type="button"
          >
            <Icon iconId="singleArrow" />
          </button>
          <button
            className={css.arrowBtn}
            disabled={totalPages === page}
            onClick={() => {
              dispatch(changePage(totalPages));
            }}
            type="button"
          >
            <Icon iconId="doubleArrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
