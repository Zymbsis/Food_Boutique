import { all, discount, popular, modal, cart } from 'constants';
import clsx from 'clsx';
import css from './ProductCardInfo.module.css';

const ProductCardInfo = ({
  product: { name, category, size, popularity },
  renderLocation = all,
}) => {
  return (
    <>
      <h3
        className={clsx(css.productName, {
          [css.discountName]: renderLocation === discount,
        })}
      >
        {name}
      </h3>
      {renderLocation !== discount && (
        <ul
          className={clsx(css.featuresList, {
            [css.allFeaturesList]: renderLocation === all,
            [css.popularFeaturesList]: renderLocation === popular,
            [css.modalFeaturesList]: renderLocation === modal,
            [css.cartFeaturesList]: renderLocation === cart,
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
          {renderLocation !== cart && (
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
