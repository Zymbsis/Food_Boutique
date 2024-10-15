import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@redux/store';
import { APP_ROOT } from 'constants';
import { ModalProvider } from 'components';
import App from './App';
import 'styles/index.css';

ReactDOM.createRoot(APP_ROOT).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
