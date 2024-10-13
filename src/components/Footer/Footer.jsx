import { Link } from 'react-router-dom';
import { Container, Icon, Logo } from 'shared';
import { SubscriptionForm } from 'components';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <div className={css.contentWrapper}>
          <div className={css.linksWrapper}>
            <Logo placement="footer" />
            <ul className={css.socialLinksList}>
              <li>
                <a href="https://www.facebook.com/goITclub/" target="blanc">
                  <Icon iconId="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/goitclub/" target="blanc">
                  <Icon iconId="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/GoIT" target="blanc">
                  <Icon iconId="youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className={css.footerText}>
            <h2>Discover the Variety of Flavors and Quality</h2>
            <p>
              An online store where you will find fresh, natural and delicious
              products for a healthy life and unforgettable gastronomic
              adventures.
            </p>
          </div>
          <SubscriptionForm />
        </div>
        <div className={css.legalLinksWrapper}>
          <p>Food Boutique. All rights reserved.</p>
          <ul className={css.legalLinksList}>
            <li>
              <Link to="/privacyPolicy">
                <span>Privacy Policy</span>
                <span>/</span>
              </Link>
            </li>
            <li>
              <Link to="/termsOfServices">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
