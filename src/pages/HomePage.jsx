import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLimit } from '@redux/requestParams/selectors.js';
import { changeLimit } from '@redux/requestParams/slice.js';
import { DESKTOP, MOBILE, TABLET } from 'constants';
import { useWindowSize } from 'hooks';
import {
  Hero,
  FiltersBar,
  AllProductsSection,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';

const homePageClasses = {
  container: 'pb-20 pt-10 md:pb-[100px] xl:flex xl:gap-10 xl:pb-[140px] xl:pt-[60px]',
  sidebar: 'flex flex-col gap-20 pt-20 md:gap-16 md:pt-[100px] xl:w-[279px] xl:gap-10 xl:pt-0',
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const limit = useSelector(selectLimit);

  useEffect(() => {
    let perPageLimit;
    if (windowWidth >= DESKTOP.vw_width) {
      perPageLimit = DESKTOP.perPage;
    } else if (windowWidth >= TABLET.vw_width) {
      perPageLimit = TABLET.perPage;
    } else {
      perPageLimit = MOBILE.perPage;
    }
    if (perPageLimit === limit) return;
    dispatch(changeLimit(perPageLimit));
  }, [dispatch, windowWidth, limit]);

  return (
    <>
      <Hero />
      <FiltersBar />
      <div className={homePageClasses.container}>
        <AllProductsSection />
        <aside className={homePageClasses.sidebar}>
          <PopularProductsSection />
          <DiscountProductsSection />
        </aside>
      </div>
    </>
  );
};

export default HomePage;
