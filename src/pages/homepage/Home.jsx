import React,{useContext}from 'react';
import "./Home.css";
import username from '../../username';
import { useParams } from "react-router-dom";
import data from '../../data';
import { AiOutlineUser } from "react-icons/ai";
import Quizcont from "../../component/quizcont"
import { useState } from 'react';
import Result from '../../component/result';
import scorepage from "../../resultpage";
const Home =()=>{
    const quizdata =useContext(data);
    const uservalue=useContext(username);
    const [result,setResult]=useState(false);
    const {id}=useParams();
    console.log(uservalue);

    // const quizhub=qusition.filter(quizdata,quizdata.id===id).map((qus)=>{
    //    <div>{qus.topic}</div>
    // })

   
    const quizhub=quizdata.filter((qus)=>{
      //  for(let i=0;i<qus.length;i++){
            if(qus.id===id){
                console.log(qus)
               return qus;
            }
        //}
    }).map((qus)=>(
       <div>
           {/* {qus.topic} */}
            <div class="max-w-md w-full mx-auto mt-4 ng-white p-8 "> 
            {/* border rounded border-gray-300 */}
            {/* <scorepage.Provider value={}> */}
                {result?<Result/>:<Quizcont data={qus} result={setResult}/>}
            {/* </scorepage.Provider> */}
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
            <header class="bg-blue-500 py-5 flex flex-row justify-between"> 
            <span class="mx-6 Qicon">Q</span>
            <span class="mx-6 flex flex-row justify-between"><span><AiOutlineUser class="userIcons"/></span><span class>{uservalue}</span></span>
            </header>
            <span class="">{quizhub}</span>
            
        </div>
    )
}
export default Home;