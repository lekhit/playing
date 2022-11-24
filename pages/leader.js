import Notecontext from '../context/notes/state'
import Image from 'next/image'
import { useEffect,useState } from 'react';
import LeaderBoard from '../components/leader_panel'
function Leader() {

    const leader = [[1, 1100, 'Somesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh']]
    const [result,setResult]=useState([]);

    useEffect( ()=>{
      let result1=['somesh','rajesh'];
      const getData= async()=>{
        const data= await fetch('/api/get_leaders');
        for(let d in data){
          result1.push(d.name);
        }
      }
      getData();
      setResult(result1);
    },[]);

    return <div className='h-screen w-screen relative z-10'>
        <div className='bg-gradient-to-r from-violet-800 to-violet-400 flex items-center justify-center relative h-screen w-screen'>
            <div className='bg-[#f5f9fa] outline outline-4 outline-gray-600 w-1/3 absolute z-30 -top-32 -left-24 h-2/3 rounded-full'></div>
            <div className='shadow shadow-2xl w-5/6 h-5/6 bg-[#f5f9fa] relative z-50 outline outline-2 outline-gray-200 rounded-md'>
                <nav className='outline outline-1 outline-gray-200 flex text-[30px] text-gray-500 justify-center p-3 rounded-t-md bg-white '>
                    <ul className='ml-16'>Leader Board</ul>
                </nav>
                <div className='flex m-4 items-center justify-around text-gray-800 '>
                    <div className='text-[15px] underline'>Back to Dashboard</div>
                    <div className='text-[30px]'>Top Participents</div>
                    <div className='text-[15px] underline'>End Test</div>
                </div>
                <div className='text-center text-gray-400'>Date: Nov 23</div>
                
                
                    <LeaderBoard/>
                    
                       
                       
                        

                </div>
            </div>
        </div>
        
        
    

}

export default Leader;