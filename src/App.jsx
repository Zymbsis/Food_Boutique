import '../src/shared/styles/base.css';
import 'modern-normalize';
import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage'));

import { Layout } from 'components';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrderPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
