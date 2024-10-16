import {
  defaultOrganicFood,
  organicFoodPngSrc,
  organicFoodWebpSrc,
} from 'images';
import clsx from 'clsx';
import css from './OrganicFoodBadge.module.css';

const OrganicFoodBadge = ({ className }) => {
  return (
    <picture>
      <source srcSet={organicFoodWebpSrc} type="image/webp" />
      <source srcSet={organicFoodPngSrc} type="image/png" />
      <img
        className={clsx(css.organicFoodImg, className)}
        src={defaultOrganicFood}
        alt="Organic Food"
        width={100}
        height={100}
      />
    </picture>
  );
};

export default OrganicFoodBadge;
