import clsx from 'clsx';
import css from './ProductName.module.css';

const ProductName = ({ children, className }) => {
  return (
    <h3 className={clsx(css.productName, { [className]: className })}>
      {children}
    </h3>
  );
};

export default ProductName;
