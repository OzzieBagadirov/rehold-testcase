const TrippyBackground = () => {
  return (
    <div className='wrapper'>
      <svg className='triangle-canvas' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
        <polygon className='triangle triangle-1' points='500,200 759,650 241,650' />
        <polygon className='triangle triangle-2' points='500,200 759,650 241,650' />
        <polygon className='triangle triangle-3' points='500,200 759,650 241,650' />
        <polygon className='triangle triangle-4' points='500,200 759,650 241,650' />
        <polygon className='triangle triangle-5' points='500,200 759,650 241,650' />
        <polygon className='triangle triangle-6' points='500,200 759,650 241,650' />
      </svg>
    </div>
  );
};

export default TrippyBackground;
