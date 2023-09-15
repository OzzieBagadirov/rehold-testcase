import { bsc } from 'viem/chains';
import { configureChains, createConfig, createStorage } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { WALLETCONNECT_PROJECT_ID } from './constants';

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [publicProvider()],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WALLETCONNECT_PROJECT_ID,
      },
    }),
  ],
  storage: createStorage({ storage: window.localStorage }),
  publicClient,
  webSocketPublicClient,
});
