import { Suspense } from 'react';
import { OrganicFoodBadge, Footer, Header } from 'components';

const mainClasses =
  'sx:w-[375px] sx:px-5 mx-auto w-full flex-1 md:w-[768px] md:px-8 xl:w-[1440px] xl:px-[100px]';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={mainClasses}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
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
