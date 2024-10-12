import clsx from 'clsx';
import css from './ProductCardInfo.module.css';
import { all, discount, popular, modal } from 'constants';
import { cart } from '../../constants/index.js';

const ProductCardInfo = ({ product, renderLocation = all }) => {
  return (
    <>
      <h3
        className={clsx(css.productName, {
          [css.popularName]: renderLocation === popular,
          [css.discountName]: renderLocation === discount,
          [css.modalName]: renderLocation === modal,
        })}
      >
        {product.name}
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
            <span>
              {product.category.replace('_&_', ' & ').replace('_', ' ')}
            </span>
          </li>
          <li className={css.descriptionItem}>
            <span>Size:</span>
            <span>{product.size}</span>
          </li>
          {renderLocation !== cart && (
            <li className={css.descriptionItem}>
              <span>Popularity:</span>
              <span>{(product.popularity / 10000).toFixed(2)}</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default ProductCardInfo;
