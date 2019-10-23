import React from 'react';

import './AppWrapper.scss';

export const AppWrapper: React.FC = ({ children }) => {
  return (
    <div className='AppWrapper'>
      {children}
    </div>
  )
};

export default AppWrapper;
