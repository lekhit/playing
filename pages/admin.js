import Accord from '../components/Accordination';
import {Paper,Input} from '@mui/material';
import Acc from '../components/Acc';
import { useEffect,useState } from 'react';
import io from 'socket.io-client'
import { Timer } from '@mui/icons-material';
let socket;
export default function Home(){
  const [timer,setTimer]=useState(15);
  useEffect(() => {

    return () => {
      console.log("This will be logged on unmount");
    }
  })

const handleUpdate=(e)=>{
  setTimer(e.target.value)
}


const emitter=(e)=>{
  (async () => {
    const rawResponse = await fetch('/api/update_question_state', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({state:""})
    }
    );
    const content = await rawResponse.json();
    
    console.log(content);
  })();
}
const [Questions,setQuestions]=useState([
  {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',
  options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},  {number:'2',question:'hat the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
  {number:'3',question:'at the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}]);
useEffect(()=>{
  (async () => {
    const rawResponse = await fetch('/api/showq' );
    const content = await rawResponse.json();
    setQuestions(content);
    //console.log(content);
  })();
})


const time = new Date();
        time.setSeconds(time.getSeconds() + 300);

  const questions=[
    {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',
    options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},


    
    {number:'2',question:'hat the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:'3',question:'at the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}
  ]


  return (
    <Paper sx={{p:5}}>
      {Questions.map((data,id)=>{
        return (<Acc timestamp={time} emitter={emitter} key={id} question={data}/>)
      })}
<Input value={timer} onChange={handleUpdate} >{timer}</Input>
    
    </Paper>
  )

}