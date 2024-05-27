import { NavLink } from 'react-router-dom';
import Container from '../../shared/components/Container/Container';
import CartIcon from '../../shared/components/CartIcon/CartIcon';
import css from './Header.module.css';
import Logo from '../../shared/components/Logo/Logo';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

const Header = () => {
  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 1440px)',
  // });
  // const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Logo />
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.homeNavLink, {
                [css.activeLink]: isActive,
              })
            }
            to="/"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              clsx(css.cartNavLink, {
                [css.activeLink]: isActive,
              })
            }
          >
            <CartIcon
              className={css.headerCart}
              hasLabel={!isMobile && true}
              iconId={'headerCart'}
            />
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
