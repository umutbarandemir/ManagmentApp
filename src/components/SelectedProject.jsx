import React from 'react'
import Tasks from './Tasks'

function SelectedProject(props) {

    const formattedDate = new Date(props.project.dueDate).toLocaleDateString("tr-TR",{year:"numeric",month:"short",day:"numeric"})

  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{props.project.title}</h1>
                <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100' onClick={props.delete}>Delete</button>
            </div>
            <p className='mb-4 text-stone-400'>{formattedDate}</p>
            <p className='text-stone-600 whitespace-pre-wrap'>{props.project.description}</p>
        </header>
        <Tasks Tasks={props.Tasks} onTaskAdd={props.onTaskAdd} onTaskDelete={props.onTaskDelete}></Tasks>
    </div>
  )
}

export default SelectedProject