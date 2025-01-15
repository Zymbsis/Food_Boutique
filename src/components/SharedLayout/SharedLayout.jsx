import { Suspense } from 'react';
import { OrganicFoodBadge, Footer, Header } from 'components';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-1">
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
