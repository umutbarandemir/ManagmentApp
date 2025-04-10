import React, { useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {props.children}
      <form method="dialog" className='mt-4 text-right'>
        <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-500'>{props.buttonName}</button>
      </form>
    </dialog>,document.getElementById("modal-root")
  )
});

export default Modal