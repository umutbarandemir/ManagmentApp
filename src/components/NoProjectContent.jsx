import React from 'react'
import NoProjectImage from "../assets/no-projects.png";

function NoProjectContent(props) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={NoProjectImage} alt="Empty List" className='w-16 h-16 object-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a Project Or Create One</p>
        <p className='mt-8'>
            <button onClick={props.addProject} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>+ Create Project</button>
        </p>
    </div>
  )
}

export default NoProjectContent