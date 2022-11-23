import { useRouter } from 'next/router'

function Nickname(){
    
    const navigator = useRouter();
    function onClickHandler(){
        navigator.push('/quiz');
    }

    return <div className="p-8 relative flex justify-center items-center w-screen h-full min-h-screen bg-gradient-to-t from-violet-800 to-violet-400">
    <div className="absolute h-screen bottom-2/3 opacity-30 right-screen sm:right-2/3 w-full sm:w-1/3 rounded-r-full bg-red-300"></div>
    <div className="absolute h-screen bottom-2/3 opacity-30 left-screen sm:left-2/3 w-full sm:w-1/3 rounded-l-full bg-red-300"></div>
    <div className="flex flex-col">
        <h1 className="text-white text-[25px] font-bold m-3" >Choose your Nickname</h1>
        <input type='text' placeholder='Nickname' className="outline outline-1 outline-white m-4 bg-transparent p-2 rounded-md text-white placeholder-white" />
        <input type='submit' onClick={onClickHandler} className="bg-white text-violet-500 p-2 m-4 rounded-md" value='Submit' />
    </div>
</div>
}

export default Nickname;