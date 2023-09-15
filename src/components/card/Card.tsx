import './Card.css';

import React, { memo, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ width = '100%', height = '100%', children, className }) => {
  return (
    <div className={`card ${className}`} style={{ width, height }}>
      <div className='card-table-wrapper'>{children}</div>
    </div>
  );
};

export default memo(Card);
