import { Link } from 'react-router-dom';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ placement = 'header', className, ...props }) => {
  return (
    <Link
      to="/"
      className={clsx(css.logoLink, {
        [css.footerLogoLink]: placement === 'footer',
        [className]: className,
      })}
      {...props}
    >
      <Icon iconId={placement === 'header' ? 'logoHeader' : 'logoFooter'} />
      <span>Food Boutique</span>
    </Link>
  );
};

export default Logo;
