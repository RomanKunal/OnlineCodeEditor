import { useState } from 'react';
import React from 'react'
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';


function Home() {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const createNewButton = (e) => {
    e.preventDefault();
    const Id=uuid();
    setRoomId(Id);
    //console.log(Id);
    toast.success('New Room Created');
  }
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='logoImg' src='/codelogo.jpeg' alt='Code Editor Logo' />
        <h4 className='mainLabel'>Paste invitation id</h4>
        <div className='inputGroup'>
          <input type='text' className='inputBox' placeholder='Room ID' onChange={(e)=>{setRoomId(e.target.value)}} value={roomId} />
          <input type='text' className='inputBox' placeholder='Username'
           onChange={(e)=>{setUsername(e.target.value)}} value={username}
           />
          <button className='btn joinBtn'>Join</button>
          <span className='createInfo'>
            Don't have an invitation? <a onClick={createNewButton} className='createNewBtn' href='/'>Create a new one</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built By CoffeeBean☕ </h4>
      </footer>
    </div>
  )
}

export default Home
