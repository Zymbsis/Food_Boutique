import { Container, Icon, Logo } from 'shared';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <div className={css.linkWrapper}>
          <Logo placement="footer" />
          <ul>
            <li>
              <a href="/">
                <Icon iconId="facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon iconId="instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <Icon iconId="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
