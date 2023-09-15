import React from 'react';

const Home = React.lazy(() => import('../pages/home'));

export const Pages: TPages = {
  Home: {
    Title: 'Home',
    path: '/',
    element: <Home />,
  },
};

export const CHAIN_ID = process.env.REACT_APP_CHAIN_ID;
export const CHAIN_TOKEN_ADDRESS = process.env.REACT_APP_CHAIN_TOKEN_ADDRESS;

export const WALLETCONNECT_PROJECT_ID = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID;
