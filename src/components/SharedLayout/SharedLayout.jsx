import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MOBILE, TABLET, DESKTOP } from 'constants';
import { useWindowSize } from 'hooks';
import { selectLimit } from '@redux/requestParams/selectors.js';
import { changeLimit } from '@redux/requestParams/slice.js';
import { OrganicFoodBadge, Footer, Header } from 'components';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
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
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.fallback}>
              <OrganicFoodBadge />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
