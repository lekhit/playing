import { useEffect, useState } from "react";
import { useTimer } from 'react-timer-hook';
import {useAppContext} from '../context/notes/state'

  //const time = new Date();
  //time.setSeconds(time.getSeconds() + 5);


function Questions(props) {
  const login_a=useAppContext();
  const[selected,setSelected]=useState(-1);
  const [colors,setColors]=useState(["bg-white","bg-white","bg-white","bg-white"]);
  const [isOver,setOver]=useState(false);
  const [button_state,setButtonstate]=useState({color:"green",text:"submit"})
  const[question,setQuestion]=useState({count:"1" ,number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']})
 
  function MyTimer( {expiryTimestamp} ) {
    const {
      seconds,   
      isRunning,
    } = useTimer({ expiryTimestamp, onExpire:() => {
      setOver(true);
      setButtonstate({color:"sky",text:"request question"})
    }});
  
    const handleClick=async (e)=>{
      if(isOver) return
    setColors((colors)=>{if(selected===-1) return colors; colors[selected]="bg-white";colors[e.target.id]="bg-amber-300";
    return colors;
    })
    setSelected(e.target.id);
    
    //console.log(e.target.id,colors)
    }
    const handleSubmit=async(e)=>{
      setOver(true);
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
      setButtonstate({color:"purple",text:"submitted"})}
      if(button_state.color==="sky"){
        (async () => {
          const rawResponse = await fetch('/api/request_question', {  });
          const content = await rawResponse.json();
          if(content.count==="0") return;
          setButtonstate({color:"green",text:"submit"});
          setQuestion(content);
          resetStates();
          console.log(content);
        })();

      }
    }
    
    // useEffect(()=>(console.log(selected)),[selected])
   
    return (
<div className="relative rounded-xl sm:p-8 p-2 md:h-[600px] md:w-[900px] h-full w-[300px] sm:h-[600px] sm:w-[400px]">
      <div className='flex justify-center'>
      <div>
        <div className='bg-transparent flex mt-2 m-4 justify-center items-center w-[50px] h-[50px] rounded-full outline outline-4 outline-violet-900'>
              <span className='select-none text-white text-[30px]'>{seconds}</span>
          </div>
          
  </div>  
      </div>
      <div className="mt-6">
          <h1 className='text-white font-bold sm:text-[30px] text-[20px] text-center'>{question.question}</h1>
          <div className='text-center text-[20px] text-violet-500 content-center mt-8 flex flex-wrap justify-around'>
            {question.options.map((option,id)=>{
              return (<div key={id}  onClick={handleClick} id={id} className={`${colors[id]} cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{option}</div>
              )
            })}
            <div onClick={handleSubmit}  className={`bg-${button_state.color}-400 cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{button_state.text}</div>
               </div>
      </div>
  </div>


        
    );
  }


  const resetStates=()=>{
    setColors(["bg-white","bg-white","bg-white","bg-white"])
    setSelected(-1)
    setOver(false);
  }

  useEffect(()=>{
    console.log("question updated")
    resetStates();
  },[props.question]);

  return  <div >
      <MyTimer expiryTimestamp={new Date(props.question.time)} />
      
  </div>
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
