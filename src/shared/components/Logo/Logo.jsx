import { Link } from 'react-router-dom';
import icon from '../../../icons/sprite.svg';
import css from './Logo.module.css';
import clsx from 'clsx';

const Logo = ({ placement = 'header', className }) => {
  return (
    <Link
      to="/"
      className={clsx(css.logoLink, {
        [css.footerLogoLink]: placement === 'footer',
        [className]: className,
      })}
    >
      <svg role="img">
        <use
          xlinkHref={`${icon}#${
            placement === 'header' ? 'logoHeader' : 'logoFooter'
          }`}
        />
      </svg>
      <span>Food Boutique</span>
    </Link>
  );
};

export default Logo;
