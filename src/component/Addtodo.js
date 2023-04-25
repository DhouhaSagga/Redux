import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoslice/Todoslice';

function Addtodo() {
  const dispatch =useDispatch();
  const [task, settask] = useState({
    id:Math.random(),
    title:"",
    description:"",
    isDone:false,
  });
  return (
    <div className='add-task'>
      <input type='text' placeholder='Enter Task Title' 
      onChange={(e)=>{settask({...task,title:e.target.value})}}></input>
      <input type='text' placeholder='Enter Task Description'
      onChange={(e)=>{settask({...task,description:e.target.value})}}></input>
      <button
      onClick={()=>dispatch(addTask(task))}>
        Add New Task</button>
    </div>
  )
}

export default Addtodo