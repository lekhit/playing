import { useRouter } from 'next/router'
import { useState } from 'react';
import {useAppContext} from '../context/notes/state'


function Nickname(){
    const navigator = useRouter();
    let [nick,setnick] = useState('');
    const login_a=useAppContext();
    function onClickHandler(event){
        console.log('kush to gadbad he daya');
        //localStorage.setItem('nick',nick)
        login_a.setNickname(nick);
        console.log(login_a.nick);


        (async () => {
          //let email=localStorage.getItem("email")
          let email=login_a.email;
            const rawResponse = await fetch('/api/add_user', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({nickname:nick,email:email})
            });
            const content = await rawResponse.json();
          
            console.log(content);
          })();
          console.log(login_a.email);
        navigator.push('/quiz');
    }

    function changeHandler(event){
        setnick(event.target.value);
    }

    return <div className="p-8 relative flex justify-center items-center w-screen h-full min-h-screen bg-gradient-to-t from-violet-800 to-violet-400">
    <div className="absolute h-screen bottom-2/3 opacity-30 right-screen sm:right-2/3 w-full sm:w-1/3 rounded-r-full bg-red-300"></div>
    <div className="absolute h-screen bottom-2/3 opacity-30 left-screen sm:left-2/3 w-full sm:w-1/3 rounded-l-full bg-red-300"></div>
    <div className="flex flex-col">
        <h1 className="text-white text-[25px] font-bold m-3" >Choose your Nickname</h1>
        <input type='text' onChange={changeHandler} placeholder='Nickname' className="text-center outline outline-1 outline-white m-4 bg-transparent p-2 rounded-md text-white placeholder-white" />
        <input type='submit' onClick={onClickHandler} className="bg-white text-violet-500 p-2 m-4 rounded-md" value='Submit' />
    </div>
</div>
}

export default Nickname;