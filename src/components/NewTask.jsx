import React from 'react'

function NewTask() {
  return (
    <div className='flex items-center gap-4'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Add Task</button>
    </div>
  )
}

export default NewTask