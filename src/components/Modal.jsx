import { forwardRef } from 'react';
import Button from './Button';
import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ buttonCaption, children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='backdrop:bg-stone-900/90 p-4 rounded-lg font-IRANSans'
    >
      {children}
      <form method='dialog' className='mt-6'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
