import React,{useContext}from 'react';
import "./Home.css";
import username from '../../username';


const Home =()=>{
    const uservalue=useContext(username);
  console.log(uservalue)
    return(
        <div>
            sarathi 
        </div>
    )
}
export default Home;