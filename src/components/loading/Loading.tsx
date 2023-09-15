import './Loading.css';

import Glowing from '../effects/Glowing';

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  return (
    <>
      {show && (
        <div className='spinner-container d-flex justify-content-center'>
          <div className='loading-spinner'>
            <Glowing radius='24px' opacity='0.4' />
          </div>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}
          />
        </div>
      )}
    </>
  );
};

export default Loading;
