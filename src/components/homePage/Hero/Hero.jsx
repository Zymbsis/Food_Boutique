import { Container } from 'shared';
import TextContent from './TextContent/TextContent';
import Banner from './Banner/Banner';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <Container>
        <TextContent />
        <Banner />
      </Container>
    </section>
  );
};

export default Hero;
