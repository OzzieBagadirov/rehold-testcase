// <reference types="react-scripts" />
declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.md';

interface Window {
  walletLinkExtension?: any;
  ethereum?: {
    isCoinbaseWallet?: true;
    isBraveWallet?: true;
    isMetaMask?: true;
    isRabby?: true;
    isTrust?: true;
    isLedgerConnect?: true;
    autoRefreshOnNetworkChange?: boolean;
  };
  phantom?: {
    ethereum?: {
      isPhantom?: true;
    };
  };
  web3?: Record<string, unknown>;
}

declare type TPage = {
  Title: string;
  path: string;
  element: React.LazyExoticComponent;
};

declare type TPages = {
  [key: string]: TPage;
};
