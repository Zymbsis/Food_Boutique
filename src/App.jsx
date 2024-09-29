import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage'));

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrderPage />} />
      </Routes>
    </SharedLayout>
  );
};

export default App;
