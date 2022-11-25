
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from '@mui/material';
import { useTimer } from 'react-timer-hook';
import { data } from 'autoprefixer';




export default function Acc(props){
   const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer(props.timestamp);

  const emitter=(e)=>{
    (async () => {
      const stamp=new Date();
      const rawResponse = await fetch('/api/set_answer', 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({ans:props.question.answer,timestamp:stamp.toUTCString(),time:15})
      }
      );
      const content = await rawResponse.json();
      
      console.log(content);
    })();
  }



  return(
    <div>
               <Accordion sx={{m:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Question {props.question.number}</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <div className='flex justify-center'>
    <div>
      <div className='bg-transparent flex mt-2 m-4 justify-center items-center w-[50px] h-[50px] rounded-full outline outline-4 outline-violet-900'>
            <span className='select-none text-black text-[30px]'>{seconds}</span>
        </div>
        
</div>  
    </div>

          <Typography variant={'h1'}>
          {props.question.question}
         

            
          </Typography>
          <div className="mt-6">

      <div className='text-center text-[20px] text-white-500 content-center mt-8 flex flex-wrap justify-around'>

      <div id={0}    className={`bg-indigo-500 cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{props.question.options[0]}</div>
      <div id={1}    className={`bg-yellow-400 cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{props.question.options[1]}</div>
      <div id={2}   className={`bg-pink-400 cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{props.question.options[2]}</div>
      <div id={3}   className={`bg-fuchsia-400 cursor-pointer select-none p-1 md:p-2 w-[250px] md:m-4 m-3  rounded-md`}>{props.question.options[3]}</div>
      
      
           </div>
  </div>
          <Button onClick={()=>{
            const tt=new Date();
            tt.setSeconds(tt.getSeconds()+15);
            restart(tt)
            emitter(props.question)}} >start</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  )
  
}
