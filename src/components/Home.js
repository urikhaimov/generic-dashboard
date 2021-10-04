import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import data from '../data.json';


const Home = () => {
 let context = useContext(UserContext);
 console.log('context', context)

  return (
  <div className="home">Home page
     <ul>
       {
         data.map((e) =>{
           return(
              <li><a href={`/dashboard/${e.id}`}>{e.fullName}</a></li>
           );
         })
       }
     </ul>
  
  
  </div>);
};

export default Home;
