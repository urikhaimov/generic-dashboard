import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Comp1 = () => {
 let context = useContext(UserContext);
 

  return (<div className="red">Component 1</div>);
};

export default Comp1
