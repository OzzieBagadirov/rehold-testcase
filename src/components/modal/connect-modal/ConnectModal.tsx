import React, { useEffect } from 'react';
import { Connector, PublicClient, useConnect } from 'wagmi';
import { ConnectResult } from 'wagmi/actions';

import Modal, { ModalProps } from '../Modal';
import { ProviderButton } from './components';

export interface ConnectModalProps extends ModalProps {
  onConnectionLoading?: () => void;
  onConnectionIdle?: () => void;
  onConnectionSuccess?: (data: ConnectResult<PublicClient>) => void;
  onConnectionError?: (error: Error) => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({
  overlayed = true,
  opened,
  setOpened,
  onConnectionLoading = () => {},
  onConnectionIdle = () => {},
  onConnectionSuccess = () => {},
  onConnectionError = () => {},
}) => {
  const {
    connectAsync: connect,
    data: connectionData,
    connectors,
    error,
    isLoading,
    isError,
    isIdle,
    isSuccess,
  } = useConnect();

  const handleConnectButton = async (connector: Connector) => {
    try {
      await connect({ connector });
    } catch {
      console.log('Connection error');
    } finally {
      setOpened(false);
    }
  };

  useEffect(() => {
    isLoading && onConnectionLoading();
  }, [isLoading]);

  useEffect(() => {
    isIdle && onConnectionIdle();
  }, [isIdle]);

  useEffect(() => {
    isSuccess && connectionData && onConnectionSuccess(connectionData);
  }, [isSuccess, connectionData]);

  useEffect(() => {
    isError && error && onConnectionError(error);
  }, [isError, error]);

  return (
    <Modal opened={opened} setOpened={setOpened} overlayed={overlayed}>
      <div
        style={{
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          gap: '3rem',
          padding: '3rem 3rem',
          borderRadius: '32px',
          border: '1px solid #6e6e6e',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {connectors.map((connector) => (
          <div key={connector.id}>
            {connector.name === 'MetaMask' && (
              <ProviderButton
                imageUrl={
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png'
                }
                onClick={() => handleConnectButton(connector)}
                disabled={!connector.ready}
              />
            )}
            {connector.name === 'WalletConnect' && (
              <ProviderButton
                imageUrl={'https://1000logos.net/wp-content/uploads/2022/05/WalletConnect-Logo.png'}
                onClick={() => handleConnectButton(connector)}
                disabled={!connector.ready}
              />
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ConnectModal;
