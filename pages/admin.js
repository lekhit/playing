import Accord from '../components/Accordination';
import Paper from '@mui/material/Paper';
import Acc from '../components/Acc';
import { useEffect } from 'react';
import io from 'socket.io-client'
let socket;
export default function Home(){
  useEffect(() => {
    socketInitializer();
    return () => {
      console.log("This will be logged on unmount");
    }
  })

const socketInitializer = async () => {
  await fetch('/api/socket');
  socket = io()

  socket.on('connect', () => {
    console.log('connected')
  })

  
}


const emitter=(e)=>{
  console.log(e);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);
  e.time=time
  e.colors=["bg-white","bg-white","bg-white","bg-white"]
    socket.emit('input-change',JSON.stringify( e));
}

  const questions=[
    {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:'2',question:'hat the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:'3',question:'at the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}
  ]
  return (
    <Paper sx={{p:5}}>
      {questions.map((data,id)=>{
        return (<Acc emitter={emitter} key={id} question={data}/>)
      })}
    
    </Paper>
  )

}