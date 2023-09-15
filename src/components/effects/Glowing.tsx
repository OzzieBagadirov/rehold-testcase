interface GlowingProps {
  radius?: string;
  opacity?: string;
}

const Glowing: React.FC<GlowingProps> = ({ radius = '14px', opacity = '0.8' }) => {
  return (
    <>
      <div className='button-glow' style={{ left: '4px' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            willChange: 'transform',
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
            opacity: opacity,
            filter: `blur(${radius})`,
            background: 'rgb(213,159,255)',
            borderRadius: '32px',
          }}
        />
      </div>
      <div className='button-glow' style={{ right: '4px' }}>
        <div
          style={{
            height: '100%',
            width: '100%',
            willChange: 'transform',
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translate(0px, 0px)',
            opacity: opacity,
            filter: `blur(${radius})`,
            background: 'rgb(117,215,245)',
            borderRadius: '32px',
          }}
        />
      </div>
    </>
  );
};

export default Glowing;
