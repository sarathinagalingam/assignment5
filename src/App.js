
import './App.css';
import Home from '../src/pages/homepage/Home';
//import Home from '../src/pages/homepage/Home';
import Login from '../src/pages/login/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import username from '../src/username';
import data from '../src/data';

import { useState } from 'react';


function App() {
 
  const item = [
    {id:'0', topic:""},
    {id:'1', topic:"sports"},
    {id:'2', topic:"sports"},
    {id:'3', topic:"sports"},
    {id:'4', topic:"sports"},
    {id:'5', topic:"sports"},
  ]

  const[uname]=useState('');
  
 console.log(uname)

  return (
     <BrowserRouter>
        <div className="App" >
          <data.Provider value={item}>
          <username.Provider value={uname}>
          <Switch>
              <Route path='/' exact component={Login}></Route>
              <Route path='/home'  component={Home}></Route>
          </Switch>
          </username.Provider></data.Provider> 
        </div>
    </BrowserRouter>
      
    
  )}

export default App;
