import { Suspense } from 'react';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ paddingTop: 200 }}>LOADING</div>}>
        <main>{children}</main>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
