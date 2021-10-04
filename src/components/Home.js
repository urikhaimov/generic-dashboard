import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Home = () => {
 let context = useContext(UserContext);
 console.log('context', context)

  return (<div>Component 1</div>);
};

export default Home;
