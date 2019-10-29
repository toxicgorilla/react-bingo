import React from 'react';

import './AppWrapper.scss';

const AppWrapper: React.FC = ({ children }) => {
  return (
    <div className='AppWrapper'>
      {children}
    </div>
  )
};

export default AppWrapper;
