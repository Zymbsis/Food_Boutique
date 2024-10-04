import { NavLink } from 'react-router-dom';
import { Container, Logo } from 'shared';
import CartSummary from '../CartSummary/CartSummary.jsx';
import clsx from 'clsx';
import css from './Header.module.css';

const getActiveClass = (isActive, necessaryClassName) =>
  clsx(css[necessaryClassName], {
    [css.activeLink]: isActive,
  });

const Header = () => {
  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Logo />
        <nav>
          <ul className={css.navigation}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  getActiveClass(isActive, 'homeNavLink')
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  getActiveClass(isActive, 'cartNavLink')
                }
              >
                <CartSummary />
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
