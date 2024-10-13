import clsx from 'clsx';
import css from './OrganicFoodBadge.module.css';

const OrganicFoodBadge = ({ className }) => {
  return (
    <picture>
      <source
        srcSet="/img/organic_food_badge/organic_food_webp_@1x.webp 1x,
                img/organic_food_badge/organic_food_webp_@2x.webp 2x,
                img/organic_food_badge/organic_food_webp_@3x.webp 3x"
        type="image/webp"
      />
      <source
        srcSet="/img/organic_food_badge/organic_food_png_@1x.png 1x,
                img/organic_food_badge/organic_food_png_@2x.png 2x,
                img/organic_food_badge/organic_food_png_@3x.png 3x"
        type="image/png"
      />

      <img
        className={clsx(css.organicFoodImg, className)}
        src="/img/organic_food_badge/organic_food_png_@1x.png"
        alt="Organic Food"
        width={100}
        height={100}
      />
    </picture>
  );
};

export default OrganicFoodBadge;
