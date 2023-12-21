import React from 'react';
import '../../styles/tailwind.css';

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className='h-full mt-1 ml-4 overflow-y-hidden'>
      {children}
    </div>
  );
};

export default Body;
