import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket;

const Home = () => {
  const [input, setInput] = useState('')

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

    socket.on('update-input', msg => {
      setInput(msg)
    })
  }

  const onChangeHandler = (e) => {
    setInput(e.target.value)
    //socket.emit('input-change', e.target.value)
  }
  const onClickHandler=(e)=>{
    socket.emit('input-change', input)
  }
  const emitter=(e)=>{
    socket.emit('input-change',e);
  }

  return (
  <div>
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
    <button onClick={onClickHandler}>
check
    </button>
    </div>
  )
}

export default Home;