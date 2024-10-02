import { OrganicFood } from 'shared';
import css from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <div className={css.bannerWrapper}>
      <OrganicFood className={css.organicFoodImg} />
      <picture>
        <source
          srcSet="/img/desktop/hero-banner-desktop-webp-1x.webp 1x,
                  img/desktop/hero-banner-desktop-webp-2x.webp 2x,
                  img/desktop/hero-banner-desktop-webp-3x.webp 3x"
          type="image/webp"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/img/desktop/hero-banner-desktop-png-1x.png 1x,
                  img/desktop/hero-banner-desktop-png-2x.png 2x,
                  img/desktop/hero-banner-desktop-png-3x.png 3x"
          type="image/png"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/img/tablet/hero-banner-tablet-webp-1x.webp 1x,
                  img/tablet/hero-banner-tablet-webp-2x.webp 2x,
                  img/tablet/hero-banner-tablet-webp-3x.webp 3x"
          type="image/webp"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/img/tablet/hero-banner-tablet-png-1x.png 1x,
                  img/tablet/hero-banner-tablet-png-2x.png 2x,
                  img/tablet/hero-banner-tablet-png-3x.png 3x"
          type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/img/mobile/hero-banner-mobile-webp-1x.webp 1x,
                  img/mobile/hero-banner-mobile-webp-2x.webp 2x,
                  img/mobile/hero-banner-mobile-webp-3x.webp 3x"
          type="image/webp"
          media="(max-width: 767.98px)"
        />
        <source
          srcSet="/img/mobile/hero-banner-mobile-png-1x.png 1x,
                  img/mobile/hero-banner-mobile-png-2x.png 2x,
                  img/mobile/hero-banner-mobile-png-3x.png 3x"
          type="image/png"
          media="(max-width: 767.98px)"
        />

        <img
          className={css.bannerImg}
          loading="lazy"
          src="/img/desktop/hero-banner-desktop-png-1x.png"
          alt="Hero Banner"
          width={1240}
          height={350}
        />
      </picture>
    </div>
  );
};

export default HeroBanner;
