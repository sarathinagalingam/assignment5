import React,{useEffect,useState} from 'react';

const Timer = (props)=>{
    const [isActive, setIsActive] = useState(true);
    const [counter, setCounter] = useState(10);

    function stopTimer() {
        setIsActive(true);
        setCounter(10);
        // setSecond('00');
        // setMinute('00')
      }

    useEffect(() => {
        let intervalId;
    
        if (isActive && counter>0) {
          intervalId = setInterval(() => {

    
            setCounter(counter => counter - 1);
          }, 1000)
        }
    
        return () => {
            clearInterval(intervalId);
        }
      }, [isActive, counter])
    
      return (
        <div className="container">
          <div className="time">
            <span className="minute">{counter}</span>
          </div>
          <div className="buttons">
            <button onClick={() => setIsActive(!isActive)} className="start">
              {isActive ? "Pause": "Start"}
            </button>
            <button onClick={() => stopTimer()} className="reset">Reset</button>
          </div>
       </div>
      )
    }

export default Timer;