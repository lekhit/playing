import { useState,useEffect } from "react";
import Image from 'next/image'
export default function LeaderPanel(props){
const[result2,setData]=useState([]);
const [result1,setResult1]=useState([]);
const imgs=['/crown.png','/second.png','/third.png']


const getData=async ()=>{
  let result1=[];
  const d= await fetch('/api/get_leaders');
  const data=await d.json();
  console.log(data);

   data.map((d,id)=>{
    result1.push(d.name);
})
  let r1=result1.slice(0,3);
  let r2=result1.slice(3)
  setData(r2);
  setResult1(r1);
}
useEffect( ()=>{
  
  
  getData();
  //
},[]);

// useEffect(function() {
//   console.log("Effect ran")
//   fetch("/api/get_leaders")
//       .then(res => res.json())
//       .then(data => setData(data))
// }, [])

  return (
  <div>
    <div className='flex justify-around pt-4'>
{result1.map((data,idx)=>{
return (<div key={idx} className='flex flex-col justify-center items-center outline outline-1 outline-gray-300 rounded-xl w-1/5 bg-white h-[200px]'>
<div className='m-2'>
    <Image alt="crown" src={imgs[idx]} width={200}
height={200}/>
</div>
<div className='text-gray-500'>
    {data}
</div>
{/* <div className='rounded-full bg-[#f0f7f7] text-[15px] text-[#64d8d8] px-6 py-1 m-3 font-bold'>
    {leader[0][1]}
</div> */}
</div>);
})}
</div>

  <div className=' mx-20 mt-8 text-gray-600'>
  {result2.map((data,id)=>{
    return (<div key={id} className='px-8 shadow-md outline outline-1 outline-gray-300 flex justify-around items-center bg-white m-2 rounded-md h-[40px]'>

    <div>{data}</div>
</div>)

  })
    }
    </div>
    </div>
    );
}