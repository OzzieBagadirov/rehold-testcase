import { useEffect, useState } from 'react';
import { useAccount, useBalance, useDisconnect } from 'wagmi';

import { Button, Card, ConnectModal, Glowing, Loading, Text } from '../../components';
import { CHAIN_TOKEN_ADDRESS } from '../../constants';
import { WideEffects } from './components';

const Home = () => {
  const [isModalOpened, setModalOpened] = useState(false);
  const [isConnecting, setConnecting] = useState(false);

  const { address, isConnected, isReconnecting } = useAccount();
  const {
    data: balanceData,
    refetch: balanceRefetch,
    error: balanceError,
    isLoading: isBalanceLoading,
  } = useBalance({ address: address });
  const {
    data: tokenBalanceData,
    refetch: tokenBalanceRefetch,
    error: tokenBalanceError,
    isLoading: isTokenBalanceLoading,
  } = useBalance({ address: address, token: CHAIN_TOKEN_ADDRESS as `0x${string}` });

  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      balanceRefetch();
      tokenBalanceRefetch();
    }
  }, [isConnected]);

  const handleDisconnectButton = disconnect;

  return (
    <>
      <WideEffects />
      <ConnectModal
        onConnectionLoading={() => setConnecting(true)}
        onConnectionSuccess={() => setConnecting(false)}
        onConnectionError={() => setConnecting(false)}
        opened={isModalOpened}
        setOpened={setModalOpened}
      />
      {
        <Loading
          show={isConnecting || isReconnecting || isBalanceLoading || isTokenBalanceLoading}
        />
      }
      <div
        className='w-100'
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card width='fit-content' height='fit-content'>
          {isConnected ? (
            <div
              style={{
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem 3rem',
              }}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <Text medium className='gray-900'>
                  Address:
                </Text>
                <Text mono className='gray-900'>
                  {address}
                </Text>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}
              >
                <Text medium className='gray-900'>
                  Coin Balance:
                </Text>
                <Text className='gray-900'>
                  {balanceData && balanceData.formatted} {balanceData && balanceData.symbol}
                  {balanceError && balanceError.message}
                </Text>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}
              >
                <Text medium className='gray-900'>
                  USDT Balance:
                </Text>
                <Text className='gray-900'>
                  {tokenBalanceData && tokenBalanceData.formatted}{' '}
                  {tokenBalanceData && tokenBalanceData.symbol}
                  {tokenBalanceError && tokenBalanceError.message}
                </Text>
              </div>
              <Button
                text={'DISCONNECT'}
                color='white'
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  backgroundColor: '#080808',
                }}
                onClick={() => handleDisconnectButton()}
              />
              <Glowing />
            </div>
          ) : (
            <Button
              style={{ width: '12rem' }}
              text={'CONNECT'}
              isGlowing={true}
              onClick={() => setModalOpened(true)}
            />
          )}
        </Card>
      </div>
    </>
  );
};

export default Home;
