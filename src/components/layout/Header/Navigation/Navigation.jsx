import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsQuantity } from '@redux/cart/slice';
import { CartIndicator } from 'shared';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const productsQuantity = useSelector(selectProductsQuantity);

  const getActiveClass = (isActive, necessaryClassName) =>
    clsx(css[necessaryClassName], {
      [css.activeLink]: isActive,
    });

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => getActiveClass(isActive, 'homeNavLink')}
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => getActiveClass(isActive, 'cartNavLink')}
      >
        <CartIndicator
          className={css.headerCart}
          productsQuantity={productsQuantity}
        />
      </NavLink>
    </nav>
  );
};

export default Navigation;
