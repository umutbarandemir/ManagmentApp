import React, { useRef } from 'react'
import Input from './Input.jsx'
import Modal from './Modal.jsx';

function Content(props) {

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveButton(){
    const enteretTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteretDueDate = dueDate.current.value;

    if(enteretTitle.trim()===""||enteredDescription.trim()===""||enteretDueDate.trim()===""){
      modal.current.open();
      return;
    }

    props.addProject({
      title:enteretTitle,
      description:enteredDescription,
      dueDate:enteretDueDate
    })

  }

  return (
   <>
   <Modal ref={modal} buttonName="Close">
    <h2 className='text-xl font-bold text-stone-500 my-4'>Missing Input</h2>
    <p className='text-stone-400 mb-4'>Check the values you entered!!!</p>
   </Modal>
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
        <li><button onClick={props.cancelProject} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li><button onClick={saveButton} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-500'>Save</button></li>
        </menu>
    </div>
   </>
  )
}

export default Content