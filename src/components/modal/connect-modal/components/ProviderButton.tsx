import { colors } from '../../../colors';

const ProviderButton = (props: any) => {
  const { imageUrl, onClick, disabled } = props;

  return (
    <div onClick={() => onClick()}>
      <div style={{ pointerEvents: 'auto', zIndex: '10' }}>
        <div style={{ zIndex: '0', position: 'relative' }}>
          <div
            className='button'
            style={{
              height: 'fit-content',
              backgroundColor: colors.GRAY_50,
              borderRadius: '20px',
              padding: '0',
            }}
          >
            <div
              style={{
                height: '104px',
                width: '104px',
                padding: '24px',

                cursor: !disabled ? 'pointer' : 'initial',

                border: 'none',
                borderRadius: '0.9375rem',

                fontFamily: 'BasisGrotesqueMonoPro-Regular',
                fontWeight: '500',
                fontSize: '1rem',

                color: '#080808',
                backgroundColor: '#e9e8e3',
                transition: 'color .2s ease-in-out,background-color .2s ease-in-out',
              }}
            >
              <img
                width='100%'
                height='100%'
                src={imageUrl}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <div className='button-glow' style={{ left: '4px' }}>
              <div
                className='button-glow-panel'
                style={{
                  background: 'rgb(213,159,255)',
                }}
              />
            </div>
            <div className='button-glow' style={{ right: '4px' }}>
              <div
                className='button-glow-panel'
                style={{
                  background: 'rgb(117,215,245)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderButton;
