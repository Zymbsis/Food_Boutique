import css from './Hero.module.css';
const OrganicFood = () => {
  return (
    <picture>
      <source
        srcSet="/img/organic-food-webp-1x.webp 1x,
                img/organic-food-webp-2x.webp 2x,
                img/organic-food-webp-3x.webp 3x"
        type="image/webp"
      />
      <source
        srcSet="/img/organic-food-png-1x.png 1x,
                img/organic-food-png-2x.png 2x,
                img/organic-food-png-3x.png 3x"
        type="image/png"
      />

      <img
        className={css.organicFoodImg}
        loading="lazy"
        src="/img/organic-food-png-1x.png"
        alt="Organic Food"
        width={100}
        height={100}
      />
    </picture>
  );
};

export default OrganicFood;
