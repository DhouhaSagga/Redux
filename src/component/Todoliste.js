import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import Addtodo from './Addtodo'

function Todoliste() {
    const todos = useSelector(state => state.todo.todolist)
    const [showdone, setshowdone] = useState(false)
  return (
    <div className='todo-list'>
        <Addtodo/>
        <button className='show-done' onClick={()=>setshowdone(!showdone)}>
{showdone ? "Show Undone" :"Show Done"}

        </button>
     {todos.filter((todo)=>todo.isDone===showdone).map((todo) =>(
        <Todoitem todo={todo}/>
     ))}
    </div>
  )
}

export default Todoliste