
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
    {id:'1', topic:"Cricket",
     Questions:[
       { 
         QuestionNo:1,
         QuestionTest:"Who is the highest wicket taker in Test cricket?",
         QuestionOption:[
           {answerText:"Shane Warne",iscorrect:false},
           {answerText:"Glenn McGrath",iscorrect:false},
           {answerText:"Muttiah Muralitharan",iscorrect:true},
           {answerText:"Kumble",iscorrect:false},
         ]
       },
       { 
        QuestionNo:2,
        QuestionTest:"Ricky Ponting is also known as what?",
        QuestionOption:[
          {answerText:"The Rickster",iscorrect:false},
          {answerText:"Ponts",iscorrect:false},
          {answerText:"Ponter",iscorrect:false},
          {answerText:"Punter",iscorrect:true},
        ]
      },

      { 
        QuestionNo:3,
        QuestionTest:"Who has scored the most Test hundreds ever?",
        QuestionOption:[
          {answerText:"Steve Waugh",iscorrect:false},
          {answerText:"Sachin Tendulkar",iscorrect:true},
          {answerText:"Shane Warne",iscorrect:false},
          {answerText:"Sunil Gavaskar",iscorrect:false},
        ]
      },
      { 
        QuestionNo:4,
        QuestionTest:"When was the first cricket Test match played?",
        QuestionOption:[
          {answerText:"1877",iscorrect:true},
          {answerText:"1873",iscorrect:false},
          {answerText:"1870",iscorrect:false},
          {answerText:"1788",iscorrect:false},
        ]
      },
      { 
        QuestionNo:5,
        QuestionTest:"Which player has scored the most runs in a single Test innings",
        QuestionOption:[
          {answerText:"Graham Gooch",iscorrect:false},
          {answerText:"Matthew Hayden",iscorrect:false},
          {answerText:"Brian Lara",iscorrect:true},
          {answerText:"Agarkar",iscorrect:false},
        ]
      },
     ]
  },


  {id:'2', topic:"Football",
    Questions:[
      { QuestionNo:1,
        QuestionTest:"Who was selected for the Man of the Match Award in the finals of World Cup 2018?",
        QuestionOption:[
          {answerText:"Antoine Griezman",iscorrect:true},
          {answerText:"Kylian Mbappe",iscorrect:false},
          {answerText:"Paul Pogba",iscorrect:false},
          {answerText:"Raphael Varane",iscorrect:false},
        ]
      },
      {
        QuestionNo:2,
        QuestionTest:"Brazil has the most number of World Cup titles to its credit. How many times has it won the World Cup so far?",
        QuestionOption:[
          {answerText:"4",iscorrect:false},
          {answerText:"7",iscorrect:false},
          {answerText:"6",iscorrect:false},
          {answerText:"5",iscorrect:true},
        ]
      },
      {
        QuestionNo:3,
        QuestionTest:"Which country won the first football World Cup?",
        QuestionOption:[
          {answerText:"Brazil",iscorrect:false},
          {answerText:"Germany",iscorrect:false},
          {answerText:"Uruguay",iscorrect:true},
          {answerText:"Argentina",iscorrect:false},
        ]
      },
      {
        QuestionNo:4,
        QuestionTest:" Who of the following was awarded the Golden Boot Award for most goals in the tournament of 2014?",
        QuestionOption:[
          {answerText:"Miroslave Klose",iscorrect:false},
          {answerText:"James Rodriguez",iscorrect:true},
          {answerText:"Thomas Muller",iscorrect:false},
          {answerText:"Neymar",iscorrect:false},
        ]
      },
      {
        QuestionNo:5,
        QuestionTest:"To which country does the famous player Ronaldo, who held the record for most number of World Cup goals, belong?",
        QuestionOption:[
          {answerText:"France",iscorrect:false},
          {answerText:"Brazil",iscorrect:true},
          {answerText:"Portugal",iscorrect:false},
          {answerText:"Spain",iscorrect:false},
        ]
      }
    ]
    },
    {id:'3', topic:"Olympic ",
    Questions:[
      { 
        QuestionNo:1,
        QuestionTest:"Which country will be hosting the 2014 Winter Olympic Games?",
        QuestionOption:[
          {answerText:"Russia",iscorrect:true},
          {answerText:"France",iscorrect:false},
          {answerText:"UK",iscorrect:false},
          {answerText:"Germany",iscorrect:false},
        ]
      },
      { 
        QuestionNo:2,
        QuestionTest:"When did India last win the hockey gold?",
        QuestionOption:[
          {answerText:"1984",iscorrect:false},
          {answerText:"1980",iscorrect:true},
          {answerText:"1976",iscorrect:false},
          {answerText:"1972",iscorrect:false},
        ]
      },
      { 
        QuestionNo:3,
        QuestionTest:"In 2022, which city will be the only one in the world to have hosted both the Summer and Winter Olympics?",
        QuestionOption:[
          {answerText:"Tokyo",iscorrect:false},
          {answerText:"Los Angeles",iscorrect:false},
          {answerText:"Beijing",iscorrect:true},
          {answerText:"London",iscorrect:false},
        ]
      },
      { 
        QuestionNo:4,
        QuestionTest:"Who is the first Indian to win an individual gold in the Olympics?",
        QuestionOption:[
          {answerText:"Gagan Narang",iscorrect:false},
          {answerText:"Leander Paes",iscorrect:false},
          {answerText:"Karnam Malleshwari",iscorrect:false},
          {answerText:"Abhinav Bindra",iscorrect:true},
        ]
      },
      { 
        QuestionNo:5,
        QuestionTest:"Which country will be hosting the 2014 Winter Olympic Games?",
        QuestionOption:[
          {answerText:"Russia",iscorrect:true},
          {answerText:"France",iscorrect:false},
          {answerText:"UK",iscorrect:false},
          {answerText:"Germany",iscorrect:false},
        ]
      },
    ]
  }
  ]


  const[uname,setUname]=useState('');
  
 console.log(uname);

  return (
     <BrowserRouter>
        <div className="App" >
          <data.Provider value={item}>
          <username.Provider value={uname}>
          <Switch>
              <Route path='/' exact component={Login}>
                <Login uname={setUname}/>
              </Route>
              <Route path='/home/:id'  component={Home}></Route>
          </Switch>
          </username.Provider></data.Provider> 
        </div>
    </BrowserRouter>
      
    
  )}

export default App;
