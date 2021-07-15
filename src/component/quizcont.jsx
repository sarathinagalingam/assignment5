import React from 'react';
import { useState } from 'react';

const Quizcont = (props)=>{

 const[Qustioncount,setQuestioncount]=useState(0);
 const[scorecard,setScorecard]=useState(0);
 //const[score,setScore]=useState(props.result);
 console.log(props.result);

function handleCorrectoption(e){

    
   if(e===true){
       setScorecard(scorecard+1)
       const nextQuestion = Qustioncount+1;
       if(nextQuestion<props.data.Questions.length){
        //   console.log(props.data.Questions.length);
        setQuestioncount(nextQuestion)
       }else{
        props.result(true);
       }
 
   }else{
    props.result(true);
   }
   
}


  return (
      <div class="w-full max-w-xl">
          <h1 class="font-bold text-5xl text-center text-indigo-700">
              {props.data.topic}
          </h1>
          <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8 ">
              <p class="text-2xl font-bold">{props.data.Questions[Qustioncount].QuestionTest}</p>
              
              {props.data.Questions[Qustioncount].QuestionOption.map((QuestionOption,index)=>(
                  <span value={QuestionOption.iscorrect} onClick={()=>handleCorrectoption(QuestionOption.iscorrect)} class="block mt-4 py-2 hover:bg-green-300 border border-gray-300 rounded-lg">
             <button key={index}>{QuestionOption.answerText}</button>
             </span>
         ))}
              
          </div>
        {/* <div>{qus.Questions[0].QuestionTest}</div>
         <div>{qus.Questions[0].QuestionOption.map((QuestionOption,index)=>(
             <button>{QuestionOption.answerText}</button>
         ))}</div> */}

      </div>
  )
}

export default Quizcont;