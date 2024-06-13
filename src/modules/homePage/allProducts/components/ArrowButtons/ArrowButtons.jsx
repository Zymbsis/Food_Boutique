import { ProductNavArrowButton } from 'shared';
import css from './ArrowButtons.module.css';

import clsx from 'clsx';

const ArrowButtons = ({ className }) => {
  return (
    <div className={clsx(css.arrowButtonWrapper, { [className]: className })}>
      <ProductNavArrowButton iconId="singleArrow" />
      <ProductNavArrowButton iconId="doubleArrow" />
    </div>
  );
};

export default ArrowButtons;
