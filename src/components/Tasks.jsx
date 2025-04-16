import React from 'react'
import NewTask from './NewTask'

function Tasks() {
  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask></NewTask>
        <p className='text-stone-800 my-5'>
            Project doesn't exists!!!
        </p>
    </section>
  )
}

export default Tasks