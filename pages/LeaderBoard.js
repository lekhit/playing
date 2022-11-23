import back from '../public/resources/crown.png'
import sback from '../public/resources/second.png'
import tback from '../public/resources/third.png'

function Leader() {

    const leader = [[1, 1100, 'Somesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh'], [2, 1000, 'Rajesh']]

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
                <div>
                    <div className='flex justify-around pt-4'>
                        <div className='flex flex-col justify-center items-center outline outline-1 outline-gray-300 rounded-xl w-1/5 bg-white h-[200px]'>
                            <div className='m-2'>
                                <img src={back} />
                            </div>
                            <div className='text-gray-500'>
                                {leader[0][2]}
                            </div>
                            <div className='rounded-full bg-[#f0f7f7] text-[15px] text-[#64d8d8] px-6 py-1 m-3 font-bold'>
                                {leader[0][1]}
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center outline outline-1 outline-gray-300 rounded-xl w-1/5 bg-white h-[200px]'>
                            <div className='m-2'>
                                <img src={sback}  className='h-[60px]'/>
                            </div>
                            <div className='text-gray-500'>
                                {leader[0][2]}
                            </div>
                            <div className='rounded-full bg-[#f0f7f7] text-[15px] text-[#64d8d8] px-6 py-1 m-3 font-bold'>
                                {leader[0][1]}
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center outline outline-1 outline-gray-300 rounded-xl w-1/5 bg-white h-[200px]'>
                            <div className='m-2'>
                                <img src={tback} className='h-[60px]'/>
                            </div>
                            <div className='text-gray-500'>
                                {leader[0][2]}
                            </div>
                            <div className='rounded-full bg-[#f0f7f7] text-[15px] text-[#64d8d8] px-6 py-1 m-3 font-bold'>
                                {leader[0][1]}
                            </div>
                        </div>
                        
                    </div>
                    <div className=' mx-20 mt-8 text-gray-600'>
                        <div className='px-8 shadow-md outline outline-1 outline-gray-300 flex justify-around items-center bg-white m-2 rounded-md h-[40px]'>
                            <div>{leader[3][0]}</div>
                            <div>{leader[3][2]}</div>
                            <div>Points: {leader[3][1]}</div>
                        </div>
                        <div className='shadow-md px-8 outline outline-1 outline-gray-300 flex justify-around items-center bg-white m-2 rounded-md h-[40px]'>
                            <div>{leader[3][0]}</div>
                            <div>{leader[3][2]}</div>
                            <div>Points: {leader[3][1]}</div>
                        </div>
                        <div className='shadow-md px-8 outline outline-1 outline-gray-300 flex justify-around items-center bg-white m-2 rounded-md h-[40px]'>
                            <div>{leader[3][0]}</div>
                            <div>{leader[3][2]}</div>
                            <div>Points: {leader[3][1]}</div>
                        </div>
                        <div className='shadow-md px-8 outline outline-1 outline-gray-300 flex justify-around items-center bg-white m-2 rounded-md h-[40px]'>
                            <div>{leader[3][0]}</div>
                            <div>{leader[3][2]}</div>
                            <div>Points: {leader[3][1]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>

}

export default Leader;