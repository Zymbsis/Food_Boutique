import { Container, Logo } from 'shared';
import Navigation from './Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {
  const handleClick = () => {
    location.pathname === '/' && location.reload();
  };
  console.log(555);

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
