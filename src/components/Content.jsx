import React, { useRef } from 'react'
import Input from './Input.jsx'

function Content(props) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveButton(){
    const enteretTitle = title.current.value;
    const enteretDescriotion = description.current.value;
    const enteretDueDate = dueDate.current.value;

    props.addProject({
      title:enteretTitle,
      description:enteretDescriotion,
      dueDate:enteretDueDate
    })

  }

  return (
    <div className='w-[35rem] mt-16'>
        <div>
            {/* <p><label>Title</label><input type="text" /></p>
            <p><label>Description</label><textarea  /></p>
            <p><label>Due Date</label><input type="text" /></p> */}
            <Input type="text" ref={title} label="Title"></Input>
            <Input ref={description} label="Description" textarea></Input>
            <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
        <menu className='flex items-center justify-end gap-4 my-4'>
        <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li><button onClick={saveButton} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-500'>Save</button></li>
        </menu>
    </div>
  )
}

export default Content