import Accord from '../components/Accordination';
import Paper from '@mui/material/Paper';
import Acc from '../components/Acc';

export default function home(){
  const questions=[
    {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:'2',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
    {number:'3',question:'What the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}
  ]
  return (
    <Paper sx={{p:5}}>
      {questions.map((data,id)=>{
        return (<Acc key={id} number={data.number} question={data.question}/>)
      })}
    
    </Paper>
  )

}