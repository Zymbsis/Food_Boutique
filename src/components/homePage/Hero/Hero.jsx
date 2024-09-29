import { Container } from 'shared';
import TextContent from './TextContent/TextContent';
import css from './Hero.module.css';
import Banner from './Banner/Banner';

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
