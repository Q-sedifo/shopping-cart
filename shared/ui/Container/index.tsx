import React, { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full !px-5 max-w-[1250px] !m-[auto] ${className}`}>
      { children }
    </div>
  )
}

export default Container;