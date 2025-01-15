import { NavLink } from 'react-router-dom';
import { Container, Logo } from 'shared';
import { CartSummary } from 'components';
import clsx from 'clsx';
import css from './Header.module.css';

const getActiveClass = (isActive, necessaryClassName) =>
  clsx(css[necessaryClassName], {
    [css.activeLink]: isActive,
  });

const Header = () => {
  return (
    <header className="fixed inset-0 z-10 h-[74px] w-full bg-bgPrimary py-[18px] md:h-[96px] md:py-6">
      <Container className="flex h-full items-center justify-between">
        <Logo />
        <nav className="h-full">
          <ul className="flex h-full gap-[6px] md:gap-4 xl:gap-6">
            <li className="w-[77px] md:w-[104px]">
              <NavLink to="/" className={({ isActive }) => getActiveClass(isActive, 'homeNavLink')}>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="w-[38px] md:w-[153px]">
              <NavLink
                to="/cart"
                className={({ isActive }) => getActiveClass(isActive, 'cartNavLink')}
              >
                <CartSummary className={css.headerCartSummery} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
