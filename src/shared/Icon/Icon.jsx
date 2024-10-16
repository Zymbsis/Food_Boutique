import { icon } from 'images';
import clsx from 'clsx';
import css from './Icon.module.css';

const Icon = ({ iconId, className, ...props }) => {
  return (
    <svg
      className={clsx(css.icon, { [className]: className })}
      role="img"
      {...props}
    >
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
