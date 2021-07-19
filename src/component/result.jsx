import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
const Result = (props)=>{

 const Qustioncount=props.data.Questions.length;
 
  return (
      <div class="w-full max-w-xl" >
          {/* style={{backgroundImage:`url(${e.item})`}} */}
          <h1 class="font-bold text-5xl text-center text-indigo-500">
              Thank you
          </h1>
          <div class="bg-white p-12 rounded-lg shadow-lg text-center w-full mt-8 ">
  
              <p class="text-2xl font-bold "> {props.uname} score is <span>{props.score}/{Qustioncount}</span></p>
               <Link to="/"><button class="text-indigo-400 text-center mt-5">Play again</button></Link>
          </div>

      </div>
  )
}

export default Result;