import { Link } from 'react-router-dom';
import { Icon } from 'shared';
import clsx from 'clsx';
import css from './Logo.module.css';

const Logo = ({ placement }) => {
  const handleClick = () => {
    location.pathname === '/' && location.reload();
  };

  return (
    <Link
      to="/"
      className={clsx(css.logoLink, css[placement])}
      onClick={handleClick}
    >
      <Icon iconId="logo" />
      <span>Food Boutique</span>
    </Link>
  );
};

export default Logo;
