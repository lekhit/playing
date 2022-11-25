import Accord from '../components/Accordination';
import {Paper,Input} from '@mui/material';
import Acc from '../components/Acc';
import { useEffect,useState } from 'react';

const data=[
  {number:'1',question:"which is the world's biggest real estate company?",options:["L and T","McDonalds","Reliance","DLF"],ans:"McDonalds"},
  {number:'2',question:"which Indian movie has the highest worldwide collection?",options:["Dangal","3 Idiots","Bajrangi Bhaijaan","PK"],ans:"Dangal"},
  {number:'3',question:"Who was the first female president of India?",options:["Sushma Swaraj","Droupadi Murmu","Pratibha Patil","Sarojini Naidu"],ans:"Pratibha Patil"},
  {number:'4',question:"who is the golden investor of 2k22 hillfair?",options:["Unacademy","SJVNL","Dayal Sweets","Byjus"],ans:"Unacademy"},
  {number:'5',question:"'Nabha Sparsham Deeptam' is the motto of which military unit of india? ",options:["Coast Guard","Air Force","Air Force","Navy"],ans:"Air Force"},
  {number:'6',question:"what is the full form of GDP?",options:["Growth Domestic Price","Growth Daily Product","Gross Daily Product","Gross Domestic Product"],ans:"Gross Domestic Product"},
  {number:'7',question:"When is the ‘National Girl Child Day’ celebrated annually in India?",options:["21 March","14 November","24 January","5 December"],ans:"24 January"},
  {number:'8',question:"Who has been appointed new Prime Minister of United Kingdom?",options:["Boris Johnson","Rishi Sunak","Angela Merkel","Byjus"],ans:"Rishi Sunak"},
  {number:'9',question:"which company has the tag line of 'zindagi ke sath bhi zindagi ke baad bhi'?",options:["LIC","Bajaj Finance","SBI","HDFC"],ans:"LIC"},
  {number:'10',question:"What was the theme of Hill'fair 2022? ",options:["Mirage-Ocean of mystique","Ocean-Mirage of Pharoah","Pharaoh-Ocean of mystique","Mirage-oasis of mystique"],ans:"Mirage-oasis of mystique"},
  {number:'11',question:"The name 'PARAM' is an Indian Technology, what is it ?",options:["Supercomputer","Submarine","Rocket","Helicopter"],ans:"Supercomputer"},
  {number:'12',question:"which of these colours are not present in olympic rings?",options:["Red","Green","Blue","orange"],ans:"orange"},
  {number:'13',question:"Which stock market crash was biggest in the history?",options:["1994","1992","1991","1983"],ans:"1992"},
  {number:'14',question:"What is the full form of LCD?",options:["liquid crystal display","liquid crystal diode","lithium crystal diode","large crystal device"],ans:"liquid crystal display"},
  {number:'15',question:"Company with biggest market capitalization in India?",options:["Tata","Adani","Reliance","Unilever"],ans:"Reliance"},
  {number:'16',question:"When was E-Cell NIT Hamirpur formed? ",options:["2017","2018","2019","2008"],ans:"2018"},
  {number:'17',question:"which is the oldest stock exchange in asia? ",options:["bse","nse","cse(colombo)","cse(bejing)"],ans:"Supercomputer"},
  {number:'18',question:"What was the most-watched series on Netflix in 2019?",options:["Squid Games","stranger things","Never Have I ever","Breaking Bad"],ans:"stranger things"},
  {number:'19',question:"which brand of tata group is indulged in jewellery related business ?",options:["kalyan ","PC Jewelers ","tanishq","BlueStone"],ans:"tanishq"},
  {number:'20',question:"Latest Indian Unicorn>?",options:["Molbio Diagnostics","OneCard","Shiprocket","Helicopter"],ans:"Molbio Diagnostics"},
  
 
]

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

const [Questions,setQuestions]=useState([
  {number:'1',question:'What the fastest train in the India and what is its maximum speed or operating speed?',
  options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},  {number:'2',question:'hat the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']},
  {number:'3',question:'at the fastest train in the India and what is its maximum speed or operating speed?',options:['Vande Bharat,130','Rajdhani Express ,120','Duranto Express,130','Bulllet Train,230']}]);
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
// useEffect(()=>{
//   (async () => {
//     const rawResponse = await fetch('/api/showq' );
//     const content = await rawResponse.json();
//     setQuestions(content);
//     //console.log(content);
//   })();
// })


const time = new Date();
        time.setSeconds(time.getSeconds() + 300);

  const questions=data


  return (
    <Paper sx={{p:5}}>
      {questions.map((data,id)=>{
        return (<Acc timestamp={time} emitter={emitter} key={id} question={data}/>)
      })}
<Input value={timer} onChange={handleUpdate} >{timer}</Input>
    
    </Paper>
  )

}