import './assets/css/App.css';
import './assets/css/App-mobile.css';

import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';

import { ErrorFallback } from './components';
import * as Constants from './constants/index';
import { wagmiConfig } from './wagmi.config';

const Loading = React.lazy(() => import('./components/loading/Loading'));
const Page404 = React.lazy(() => import('./pages/Page404'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WagmiConfig config={wagmiConfig}>
        <BrowserRouter>
          <Suspense fallback={<Loading show />}>
            <Routes>
              <Route path={Constants.Pages.Home.path} element={Constants.Pages.Home.element} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </WagmiConfig>
    </ErrorBoundary>
  );
}

export default App;
