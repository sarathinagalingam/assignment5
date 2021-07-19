import React,{useContext}from 'react';
//import "./Home.css";
import username from '../../username';
import { useParams } from "react-router-dom";
import data from '../../data';
import { AiOutlineUser } from "react-icons/ai";
import Quizcont from "../../component/quizcont"
import { useState } from 'react';
import Result from '../../component/result';
import scorepage from "../../resultpage";
// import Timer from '../../component/timer';


const Home =()=>{
    const quizdata =useContext(data);
    const uservalue=useContext(username);
    const [result,setResult]=useState(false);
    const [yourscore,setYourscore]= useState(" ");
    const {id}=useParams();
    //console.log(yourscore);

    // const quizhub=qusition.filter(quizdata,quizdata.id===id).map((qus)=>{
    //    <div>{qus.topic}</div>
    // })

   
    const quizhub=quizdata.filter((qus)=>{
      //  for(let i=0;i<qus.length;i++){
            if(qus.id===id){
               return qus;
            }
        //}
    }).map((qus)=>(
       <div>
           {/* {qus.topic} */}
            <div class="max-w-md w-full mx-auto mt-4 ng-white p-8 "> 
            {/* border rounded border-gray-300 */} 
                {result?<Result data={qus} score={yourscore} uname={uservalue}/>:<Quizcont data={qus} result={setResult} score={setYourscore} />}
            </div>
                    
       {/* <div>     
         <div>{qus.Questions[0].QuestionTest}</div>
         <div>{qus.Questions[0].QuestionOption.map((QuestionOption,index)=>(
             <button>{QuestionOption.answerText}</button>
         ))}</div>
     </div> */}
       
       </div>
    ))

    return(
        <div>
            <header class="bg-blue-600 py-5 flex flex-row justify-between"> 
            <span class="mx-6 text-3xl text-center text-white">Q</span>
            <span class="mx-6 flex flex-row"><span><AiOutlineUser class="font-bold text-3xl text-center text-white"/></span><span class="font-bold text-2xl text-center text-white">{uservalue}</span></span>
            </header>
     <span class="">{quizhub}</span>
    
            
        </div>
    )
}
export default Home;