import { useDispatch, useSelector } from 'react-redux';
import { createPaginationPageNumbers } from 'utils';
import { selectTotalPages } from '@redux/productLists/selectors.js';
import { selectLimit, selectPage } from '@redux/requestParams/selectors.js';
import { changePage } from '@redux/requestParams/slice';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './Pagination.module.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const showNavigationArrows = limit === 6 ? totalPages > 2 : totalPages > 4;
  const showEllipsis = limit === 6 ? page < totalPages - 1 : page < totalPages - 3;
  const buttonPanel = createPaginationPageNumbers(totalPages, page, limit);

  return (
    <div className={css.navWrapper}>
      {showNavigationArrows && (
        <div className={css.btnWrapper}>
          <PaginationArrowButton
            iconId="doubleArrow"
            inverted
            disabled={page === 1}
            onClick={() => dispatch(changePage(1))}
          />
          <PaginationArrowButton
            iconId="singleArrow"
            inverted
            disabled={page === 1}
            onClick={() => dispatch(changePage(page - 1))}
          />
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
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          ))}
        {showEllipsis && (
          <span className="inline-flex size-10 items-end justify-center pb-[4px] text-neutral-400">
            ...
          </span>
        )}
      </div>

      {showNavigationArrows && (
        <div className={css.btnWrapper}>
          <PaginationArrowButton
            iconId="singleArrow"
            disabled={totalPages === page}
            onClick={() => dispatch(changePage(page + 1))}
          />
          <PaginationArrowButton
            iconId="doubleArrow"
            disabled={totalPages === page}
            onClick={() => dispatch(changePage(totalPages))}
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;

const PaginationArrowButton = ({ iconId, inverted, ...props }) => {
  return (
    <button
      className={`w-fit rounded-full bg-zinc-50 p-[8px] text-neutral-400 transition hover:text-neutral-600 disabled:text-neutral-400/30 ${inverted ? 'rotate-180' : ''}`}
      type="button"
      {...props}
    >
      <Icon iconId={iconId} width={24} height={24} />
    </button>
  );
};
