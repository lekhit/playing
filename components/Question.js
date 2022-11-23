import { useEffect, useState } from "react";

function Questions(props) {
const [timer,setTimer]=useState(15);
useEffect(()=>{
    if(timer>0)
    setInterval((timer)=>{setTimer(timer-1)},1000)
})
  return <div className="relative rounded-xl sm:p-8 p-2 md:h-[600px] md:w-[900px] h-full w-[300px] sm:h-[600px] sm:w-[400px]">
      <div className='flex justify-center'>
          <div className='bg-transparent flex mt-2 m-4 justify-center items-center w-[50px] h-[50px] rounded-full outline outline-4 outline-violet-900'>
              <span className='text-white text-[30px]'>{timer}</span>
          </div>
      </div>
      <div className="mt-6">
          <h1 className='text-white font-bold sm:text-[30px] text-[20px] text-center'>{props.question.question}</h1>
          <div className='text-center text-[20px] text-violet-500 content-center mt-8 flex flex-wrap justify-around'>
              <div className='bg-white p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md'>{props.question.options[0]}</div>
              <div className='bg-white  p-1 md:p-2 w-[250px] md:m-4 m-3 rounded-md'>{props.question.options[1]}</div>
              <div className='bg-white  p-1 md:p-2 w-[250px] md:m-4 m-3 rounded-md'>{props.question.options[2]}</div>
              <div className='bg-white  p-1 md:p-2 w-[250px] md:m-4 m-3 rounded-md'>{props.question.options[3]}</div>
          </div>
      </div>
  </div>
}

export default Questions;
