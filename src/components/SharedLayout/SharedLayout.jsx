import { Suspense, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import OrganicFoodBadge from '../OrganicFoodBadge/OrganicFoodBadge.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLimit } from '@redux/requestParams/selectors.js';
import { useWindowSize } from 'hooks';
import { desktop, mobile, tablet } from 'constants';
import { changeLimit } from '@redux/requestParams/slice.js';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowSize();
  const limit = useSelector(selectLimit);

  useEffect(() => {
    let perPageLimit;
    if (windowWidth >= desktop.width) {
      perPageLimit = desktop.perPage;
    } else if (windowWidth >= tablet.width) {
      perPageLimit = tablet.perPage;
    } else {
      perPageLimit = mobile.perPage;
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
