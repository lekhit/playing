import { useEffect, useState } from "react";

import {useAppContext} from '../context/notes/state'

  //const time = new Date();
  //time.setSeconds(time.getSeconds() + 5);


function Questions(props) {
  const login_a=useAppContext();
  const[selected,setSelected]=useState(-1);
  const [colors,setColors]=useState(["bg-green","bg-red","bg-purple","bg-yellow"]);

  const [button_state,setButtonstate]=useState({color:"green",text:"submit"})
  
  
    const handleSubmit=async(e)=>{

      if(button_state.color==="green"){
      (async () => {
        const rawResponse = await fetch('/api/send_answer', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({number:props.question.number,select:selected,time:seconds, user:login_a.nick ,email:login_a.email})
        });
        const content = await rawResponse.json();
        
        console.log(content);
      })();
      setButtonstate({color:"purple",text:"submitted! Answer again "})
    }
      if(button_state.color==="purple"){
        setButtonstate({color:"green",text:"submit"});
        (async () => {
          const rawResponse = await fetch('/api/request_question', {  });
          const content = await rawResponse.json();
          if(content.count==="0") return;
          
          setQuestion(content);
          resetStates();
          console.log(content);
        });

      }
    }
    
    // useEffect(()=>(console.log(selected)),[selected])
   
    
    const handleClick=async (e)=>{

    setColors((colors)=>{if(selected===-1) return colors; colors[selected]="bg-white";colors[e.target.id]="bg-amber-300";
    return colors;
    })
    setSelected(e.target.id);
    
    //console.log(e.target.sid,colors)
    }


  const resetStates=()=>{
    setColors(["bg-white","bg-white","bg-white","bg-white"])
    setSelected(-1)

  }

  useEffect(()=>{
    console.log("question updated")
    resetStates();
  },[props.question]);

  return  (
    <div className="p-8 relative flex justify-center items-center w-screen h-full min-h-screen bg-gradient-to-t from-violet-800 to-violet-400">
        
    <div className="absolute h-screen bottom-2/3 opacity-30 right-screen sm:right-2/3 w-full sm:w-1/3 rounded-r-full bg-red-300"></div>
    <div className="absolute h-screen bottom-2/3 opacity-30 left-screen sm:left-2/3 w-full sm:w-1/3 rounded-l-full bg-red-300"></div>
  <div className="relative rounded-xl sm:p-8 p-2 md:h-[600px] md:w-[900px] h-full w-[300px] sm:h-[600px] sm:w-[400px]">
  <div className='flex justify-center'>
  <div>
   
      
</div>  
  </div>
  <div className="mt-6">

      <div className='text-center text-[20px] text-red-500 content-center mt-8 flex flex-wrap justify-around'>

      <div id={0}   onClick={handleClick} className={`bg-indigo-500 cursor-pointer select-none p-1 md:p-2 w-[550px] md:m-4 m-3  rounded-md`}>a</div>
      <div id={1}   onClick={handleClick} className={`bg-yellow-400 cursor-pointer select-none p-1 md:p-2 w-[550px] md:m-4 m-3  rounded-md`}>b</div>
      <div id={2}  onClick={handleClick} className={`bg-pink-400 cursor-pointer select-none p-1 md:p-2 w-[550px] md:m-4 m-3  rounded-md`}>c</div>
      <div id={3}  onClick={handleClick} className={`bg-fuchsia-400 cursor-pointer select-none p-1 md:p-2 w-[550px] md:m-4 m-3  rounded-md`}>d</div>
      
      
        <div onClick={handleSubmit}  className={`bg-${button_state.color}-400 cursor-pointer select-none p-1 md:p-2 w-[150px] md:m-4 m-3  rounded-md`}>{button_state.text}</div>
           </div>
  </div>
</div>
</div>
)
      }
export default Questions;


// useEffect(()=>{
// if(isOver){
//   (async () => {
//     const rawResponse = await fetch('/api/send_answer', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({number:props.question.number,user:props.user,selection:selected})
//     });
//     const content = await rawResponse.json();
//     // const answer=await content.answer;
//     // ( (colors)=>{
//     //   if(selected!=-1)
//     //   colors[selected]="bg-red-400"
//     //   colors[answer]="bg-green-400"
//     //   setColors(colors)
//     // })(colors);


//     //console.log(content);
//   })(colors);

// }
// },[isOver,colors,selected,props.question.number,props.user])
