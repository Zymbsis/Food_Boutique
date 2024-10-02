import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsQuantity } from '../../redux/cart/slice.js';
import { CartIndicator, Container, Logo } from 'shared';
import clsx from 'clsx';
import css from './Header.module.css';

const getActiveClass = (isActive, necessaryClassName) =>
  clsx(css[necessaryClassName], {
    [css.activeLink]: isActive,
  });

const Header = () => {
  const productsQuantity = useSelector(selectProductsQuantity);

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Logo />
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              getActiveClass(isActive, 'homeNavLink')
            }
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              getActiveClass(isActive, 'cartNavLink')
            }
          >
            <CartIndicator
              className={css.headerCart}
              productsQuantity={productsQuantity}
            />
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
