import React from 'react';

export interface ModalProps extends React.ComponentProps<'div'> {
  overlayed?: boolean;
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ opened, setOpened, overlayed = true, children }) => {
  return (
    <>
      {opened && (
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
          {overlayed && (
            <div
              style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
              {...(opened ? { onClick: () => setOpened(false) } : {})}
            />
          )}
          <div style={{ position: 'absolute' }}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
