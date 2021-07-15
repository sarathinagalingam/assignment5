import React from 'react';
import { useState } from 'react';

const Result = ()=>{

 const[Qustioncount,setQuestioncount]=useState(0);


  return (
      <div class="w-full max-w-xl">
          <h1 class="font-bold text-5xl text-center text-indigo-500">
              Result
          </h1>
          <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8 ">
              <p class="text-2xl font-bold"> Your score is </p>
              
          </div>

      </div>
  )
}

export default Result;