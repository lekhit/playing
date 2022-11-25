import logo from '../public/resources/logo.png'
import google from '../public/resources/google.svg'
import shark from '../public/resources/must.jpeg'
import Image from 'next/image'
import {useAppContext} from '../context/notes/state'

import React, { use, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login(){
    const login_a=useAppContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useRouter();
    function loginHandler(){
        signInWithGoogle(); 
    }
    function myloginHandler(){
login_a.setEmail(email);

    }
    useEffect(() => {
      if (loading) {
        console.log('Loading')
        return;
      }
      if (user) {navigate.push("/nickname");
login_a.setEmail(user.email);
        console.log(user.displayName);    
    }
    }, [user, loading,navigate,login_a]);
    
    return <div className="rounded-xl bg-white md:h-[600px] md:w-[900px] h-full w-[300px] sm:h-[600px] sm:w-[400px]">
    <div className='sm:p-16 p-2 flex relative justify-around'>
        <div className='m-4 z-50'>
            <Image src={logo} className='mt-4' alt='Loading'/>
            <div onClick={myloginHandler} className='text-[30px] text-violet-800'>Login</div>
            <p className='my-2 text-gray-600'>Login to Start test Fast!</p>
            <label className='text-[15px]'>Email*</label>
            <div className='outline outline-1 outline-gray-400 rounded-2xl mt-2'>
                <input type='text' value={email}
          onChange={(e) => setEmail(e.target.value)} className='cursor-pointer outline outline-0 m-2 mx-4 bg-transparent' placeholder='Enter your email address' />
            </div>
            <label className='text-[15px]'>Password*</label>
            <div className='outline outline-1 outline-gray-400 rounded-2xl mt-2'>
                <input type='password' value={password}
          onChange={(e) => setPassword(e.target.value)} className='cursor-pointer outline outline-0 m-2 mx-4 bg-transparent' placeholder='Enter your password' />
            </div>
            <div className='flex justify-between my-2'>
              
                
            </div>
            <div className='cursor-pointer rounded-2xl bg-gradient-to-r from-[#8cabff] to-[#7c5cff] text-center text-white text-[20px] p-1 my-3'><button  onClick={() => logInWithEmailAndPassword(email, password)}>Login</button></div>
            <div onClick={loginHandler} className='cursor-pointer flex outline outline-2 rounded-2xl outline-gray-300 items-center justify-center'>
                <Image src={google} className='h-[20px] m-4' alt='Loading'
                />
                <div>Continue with Google</div>
            </div>

        </div>
        <div className='ml-4 md:relative absolute z-40'>
            <Image src={shark} className='h-[500px] opacity-30 md:opacity-100 blur-md md:blur-none' alt='Loading'/>
        </div>
    </div>
</div>
}

export default Login;