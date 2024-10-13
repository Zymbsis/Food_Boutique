import clsx from 'clsx';
import css from './ProductListTitle.module.css';

const ProductListTitle = ({ children, className }) => {
  return (
    <h2 className={clsx(css.productListTitle, { [className]: className })}>
      {children}
    </h2>
  );
};

export default ProductListTitle;
