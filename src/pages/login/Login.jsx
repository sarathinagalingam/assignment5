import React from 'react';
import { useContext,useState } from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import data from '../../data';
//import "./login.css";
import Select from 'react-select';
import { useEffect } from 'react';

// const option = useContext(data);

const Login =({uname})=>{
 
 const topic=useContext(data);
 const [selectOption,Setselectoption]= useState('');
 const[searchvalue,setSearchValue]=useState('');
 const[show,SetShow]=useState(false);
 const[quizid,Setquizid]=useState('')
 
let addition = (e)=>{
    Setselectoption(e.target.value);
    SetShow(!show)
    setSearchValue('');
}
useEffect(()=>{
    for(let i=0;i<topic.length;i++){
        if(selectOption===topic[i].topic){
            Setquizid(topic[i].id)
        }
    }
})

// function submit(){
//     if(searchvalue===" "&&selectOption===' '){
        
//     }
// }
// {pathname: `/home/${quizid}`}
 function handleChange(e){
    const loginuser = e.target.value;
    
    uname(loginuser);
 // console.log(e.target.value);
 }
//const [quizid,setQuizid]=useState('')

// function optionselec(e){
 
//  console.log(e);
// }

let labelcheckbox = topic.filter((val)=>{
    if(searchvalue===' '){
        return val;
    }else if(val.topic.toLowerCase().includes(searchvalue.toLowerCase())){
       return val;
    }
}).map((data)=>{

return(
    <span class="bg-blue-100 text-xl cursor-default" for={data.topic} value={data.id} onClick={addition} key={data.id}>
         <option class="px-2 py-1 " key={data.id} value={data.topic}>{data.topic}</option>
    </span>
)
   
})






    return(
        <div >

            <div className="w-full min-h-screen bg-white-50 flex flex-col justify-center" style={{backgroundImage:`url("https://vistapointe.net/images/background-10.jpg")`}} >
               {/* <div class="max-w-md"> <img src="https://content.api.news/v3/images/bin/b2e4dca5405631f44dc0c407db05c13c"></img> </div> */}
                <div className="max-w-md w-full mx-auto">
                    <div className="text-4xl mt-2 font-bold text-center text-gray-400">Are You Ready for the Quiz? </div>
                
                <div className="max-w-md w-full mx-auto mt-4 ng-white bg-gray-50 opacity-90 p-8 rounded border border-gray-300">
                    <from action="" className="space-y-6">
                        <div>
                            <label htmlFor className="text-sm font-bold text-gray-800 block">Username</label>
                            <input type="text" required className="w-full p-2 border bg-white border-gray-300 rounded mt-1 focus:outline-none" onChange={(e)=>handleChange(e)}></input>
                        </div>
                        <div>    <label htmlFor className="text-sm font-bold text-gray-800 block">Topic</label>
                                 <div className="w-full p-2 bg-white border border-gray-300 rounded mt-1 focus:outline-none">
                                      <span>{selectOption}</span><input class="focus:outline-none" onClick={()=>SetShow(!show)} onChange={e=>setSearchValue(e.target.value)} type="text"/>
                                  </div>
                                  {show?
                                     <div class="bg-blue-100">{labelcheckbox}</div>:null}
                                  {/* <SelectSearch value={topic.id} options={topic.topic}/> */}
                                      {/* <select name="quiztopic" ref={register()} className="w-full p-2 border border-gray-300 rounded mt-1" >
                                     {
                                     topic.map((topics)=>(
                                         <option key={topics.id} value={topics.id} >{topics.topic}</option>
                                         ))
                                        }
                                     </select>  */}
                            
                           
                            {/* <Link  to={Submit()}><button class="w-full mt-5 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"  >Submit</button></Link> */}
                        </div>
                        <div><Link  to={{pathname: `/home/${quizid}`}}><button class="w-full mt-5 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"  >I am Ready</button></Link></div>
                    </from>
                </div>
            </div>
        </div>       
            
                    {/* <span className="h-screen flex items-center justify-center bg-gray-200">
                        <div className="LoginCard">
                            <input type="search" value={uname} onChange={handleChange}></input>
                            
                                    </div>*/}
            
        </div>
    )
}
export default Login;