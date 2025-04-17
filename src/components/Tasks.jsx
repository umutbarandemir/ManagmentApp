import React from 'react'
import NewTask from './NewTask'

function Tasks(props) {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onTaskAdd={props.onTaskAdd}></NewTask>
        {props.Tasks === 0 ? <p className='text-stone-800 my-5'> Project doesn't exists!!! </p> :        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
            {props.Tasks.map((task)=>(
                <li key={task.id} className='flex justify-between my-4'> 
                    <span>{task.text}</span>
                    <button onClick={()=>props.onTaskDelete(task.id)} className='text-stone-700 hover:text-red-500'>Clear</button>
                </li>
                ))}
        </ul>}

    </section>
  )
}

export default Tasks