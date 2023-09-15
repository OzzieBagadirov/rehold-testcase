import './Button.css';

import React, { memo } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'submit' | 'default';
  color?: string;
  isGlowing?: boolean;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  color,
  isGlowing = false,
  text,
  ...otherProps
}) => {
  return (
    <div style={{ pointerEvents: 'auto', zIndex: '10' }}>
      <div style={{ zIndex: '0', position: 'relative' }}>
        <button
          {...otherProps}
          style={{
            ...{
              width: '100%',
              position: 'relative',
              opacity: '1',

              color: color ? color : undefined,
              backgroundColor: '#e9e8e3',
            },
            ...otherProps.style,
          }}
          className={`button ${variant === 'submit' ? 'button-submit-variant' : ''}`}
        >
          <div
            style={{
              width: '100%',
              color: 'inherit',
              fontWeight: '400',
              fontSize: '1rem',
            }}
          >
            {text}
          </div>
          {isGlowing && (
            <>
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
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default memo(Button);
