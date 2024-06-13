import { useLocation } from 'react-router-dom';
import { Container, Logo } from 'shared';
import Navigation from './Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    pathname === '/' && location.reload();
  };

  return (
    <header className={css.header}>
      <Container className={css.container}>
        <Logo onClick={handleClick} />
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
