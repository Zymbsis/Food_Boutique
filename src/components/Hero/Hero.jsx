import { Container } from 'shared';
import { OrganicFoodBadge } from 'components';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <Container className={css.container}>
        <h1 className={css.title}>
          Welcome to the <span>Food</span> Boutique!
        </h1>
        <p className={css.text}>
          With Food Boutique, you`re not just subscribing to food, you`re
          signing up for a fresher, fitter, and happier you.
        </p>
        <OrganicFoodBadge className={css.organicFoodImg} />
      </Container>
    </section>
  );
};

export default Hero;
