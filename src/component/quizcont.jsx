import React from 'react';
import { useState,useEffect } from 'react';
import Timer from '../../src/component/timer';
//import './count.css';
const Quizcont = (props)=>{

 const[Qustioncount,setQuestioncount]=useState(0);
 //const value = Qustioncount;  
 const [count,setCount]=useState(5);//props.data.Questions[value].Timer);
 const[scorecard,setScorecard]=useState(0);   
// console.log(props.data.Questions[value].Timer)
 //const[score,setScore]=useState(props.result);
 //const score = 10;
 
 //const [count,setCount] = useState(10);
 
 //const [seconds, setSeconds] = useState(5);
 //const [total, Settotal] = useState();
 //const [count,setcount]=useState(false);
 //console.log(seconds);
 props.score(scorecard);

 function stopTimer() {
  setCount(5);
  // setSecond('00');
  // setMinute('00')
}


function handleCorrectoption(e){
   if(e===true){
       setScorecard(scorecard+1);
       const nextQuestion = Qustioncount+1; 
       stopTimer();  
       if(nextQuestion<props.data.Questions.length){
        //   console.log(props.data.Questions.length);
      //  console.log('handle submit '+count)
      // setSeconds(seconds);
        setQuestioncount(nextQuestion)
        console.log(nextQuestion)
       }else{
        props.result(true);
       }
 
   }else{
    props.result(true);  
   }
   
}


// const [count,SetCount]=useState(props.data.Questions[value].Timer)

// useEffect(() => {
//   // Qustioncount
//    // console.log('timer'+count);
//    let clearTimer;
//         if (count > 0) {
//             clearTimer= setTimeout(() => SetCount(count- 1), 1000);
    
//           } return()=> {
//             // clearTimeout(clearTimer);
//               props.result(true)
//           }
          
//     },[count]);
useEffect(() => {
  let intervalId;
console.log(count);
  if (count>0) {
    console.log('exited useEffect2');
    intervalId = setInterval(() => {

      
      setCount(count => count - 1);
    }, 1000)
  }
  // else{
  //   props.result(true);
  // }
  
  return () => {
      clearInterval(intervalId);
      // props.result(true);
  }
}, [count])

console.log('exited useEffect1');

   if(count===0){
    props.result(true);
   }

  return (
      <div class="w-full max-w-xl" 
    //   style={{backgroundImage:`url("")`}} 
    >
          <h1 class="font-bold text-3xl text-center text-indigo-700 count">
            
          {/* <Timer result={props.result}/> */}
          </h1>  
          <h1 class="font-bold text-5xl text-center text-indigo-700">
              {props.data.topic}
          </h1>
          <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8 ">
            <p class="float-right font-bold text-2xl text-center text-indigo-700 count">{count}</p>
            <div><p class="text-2xl font-bold">{props.data.Questions[Qustioncount].QuestionTest}</p><p>{props.data.Questions[Qustioncount].QuestionNo}/5</p></div>  
              
              {props.data.Questions[Qustioncount].QuestionOption.map((QuestionOption,index)=>(
                  
                  <span value={QuestionOption.iscorrect} onClick={()=>handleCorrectoption(QuestionOption.iscorrect)}  class="block mt-4 py-2 text-xl hover:bg-green-100 border border-gray-300 rounded-lg">
             <button class="pl-3" key={index}>{QuestionOption.answerText}</button>
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