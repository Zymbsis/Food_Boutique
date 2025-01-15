import { useEffect } from 'react';
import { Container } from 'shared';
import {
  Hero,
  FiltersBar,
  AllProductsSection,
  PopularProductsSection,
  DiscountProductsSection,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '../hooks/useWindowSize.js';
import { selectLimit } from '../redux/requestParams/selectors.js';
import { DESKTOP, MOBILE, TABLET } from '../constants/index.js';
import { changeLimit } from '../redux/requestParams/slice.js';

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
      <Container className="pb-20 pt-10 md:pb-[100px] xl:flex xl:gap-10 xl:py-[60px] xl:pr-7">
        <AllProductsSection />
        <aside className="flex flex-col gap-20 pt-20 md:gap-16 md:pt-[100px] xl:w-[279px] xl:gap-10 xl:pt-0">
          <PopularProductsSection />
          <DiscountProductsSection />
        </aside>
      </Container>
    </>
  );
};

export default HomePage;
