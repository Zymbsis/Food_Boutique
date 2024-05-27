import Container from '../../shared/components/Container/Container';
import Banner from './Banner';
import OrganicFood from './OrganicFood';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <Container>
        <h1>
          Welcome to the <span>Food</span> Boutique!
        </h1>
        <p>
          With Food Boutique, you`re not just subscribing to food, you`re
          signing up for a fresher, fitter, and happier you.
        </p>
        <div className={css.imgWrapper}>
          <Banner />
          <OrganicFood />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
