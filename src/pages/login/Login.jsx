import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import username from '../../username';
import data from '../../data';
import "./login.css";


const Login =()=>{
 const uservalue=useContext(username);
 const topic=useContext(data);
 const[uname,setUname]=useState(uservalue);
 //const{register,handlesubmit}=useForm()
 console.log(uname);
 
 function handleChange(e){
    const loginuser = e.target.value;

  setUname(loginuser);
 // console.log(e.target.value);
 }
//const [quizid,setQuizid]=useState('')

 
    return(
        <div >

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Quiz</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 ng-white p-8 border border-gray-300">
                    <from action="" className="space-y-6">
                        <div>
                            <label htmlFor className="text-sm font-bold text-gray-600 block">Username</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e)=>handleChange(e)}></input>
                        </div>
                        <div>
                        {/* <label htmlFor className="text-sm font-bold text-gray-600 block">assword</label>
                            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1"></input> */}

                                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                     {
                                     topic.map((topics)=>(
                                         <option key={topics.id} value={topics.topic}>{topics.topic}</option>
                                         ))
                                        }
                                     </select> 
                            
                                     <Link  to={{pathname: `/home`}} ><button class="w-full mt-5 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm" >Submit</button></Link>
                               
                        </div>
                        
                    </from>
                </div>
            </div>
            
                    {/* <span className="h-screen flex items-center justify-center bg-gray-200">
                        <div className="LoginCard">
                            <input type="search" value={uname} onChange={handleChange}></input>
                            
                        </div>
                    </span> */}
            
        </div>
    )
}
export default Login;