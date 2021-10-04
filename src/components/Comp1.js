import React, { useContext } from 'react';
import { DashboardContext } from '../DashboardContext';

const Comp1 = () => {
  let context = useContext(DashboardContext);
  return (<div className="red">Component 1
    {context.user.fullName}
  </div>);
};

export default Comp1
