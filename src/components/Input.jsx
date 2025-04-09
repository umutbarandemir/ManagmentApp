import React from 'react'

//bug free version

// function Input({ label, textarea, ...rest }) {
//     return (
//       <p>
//         <label>{label}</label>
//         {textarea ? <textarea {...rest} /> : <input {...rest} />}
//       </p>
//     );
//   }

function Input(props) {
  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-stone-500'>{props.label}</label>
        {props.textarea ? <textarea ref={props.ref} className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' {...props}/> : <input ref={props.ref} className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600' {...props}/>}
    </p>
  )
}

export default Input