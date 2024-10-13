import { ALL, POPULAR, DISCOUNT, MODAL, CART } from 'constants';
import clsx from 'clsx';
import css from './ProductCardInfo.module.css';

const ProductCardInfo = ({
  product: { name, category, size, popularity },
  renderLocation = ALL,
}) => {
  return (
    <>
      <h3
        className={clsx(css.productName, {
          [css.discountName]: renderLocation === DISCOUNT,
        })}
      >
        {name}
      </h3>
      {renderLocation !== DISCOUNT && (
        <ul
          className={clsx(css.featuresList, {
            [css.allFeaturesList]: renderLocation === ALL,
            [css.popularFeaturesList]: renderLocation === POPULAR,
            [css.modalFeaturesList]: renderLocation === MODAL,
            [css.cartFeaturesList]: renderLocation === CART,
          })}
        >
          <li className={css.descriptionItem}>
            <span>Category:</span>
            <span>{category.replace('_&_', ' & ').replace('_', ' ')}</span>
          </li>
          <li className={css.descriptionItem}>
            <span>Size:</span>
            <span>{size}</span>
          </li>
          {renderLocation !== CART && (
            <li className={css.descriptionItem}>
              <span>Popularity:</span>
              <span>{(popularity / 10000).toFixed(2)}</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default ProductCardInfo;
