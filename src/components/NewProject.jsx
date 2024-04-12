import { useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ handleClick, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const modal = useRef();

  const handleSave = () => {
    if (
      title.current.value === '' ||
      description.current.value === '' ||
      date.current.value === ''
    ) {
      modal.current.open();
      return;
    }
    handleAddProject({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    });
    title.current.value = '';
    description.current.value = '';
    date.current.value = '';
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='باشه'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>ورودی نامعتبر</h2>
        <p className='text-stone-600 mb-4'>
          بنظر میاد یه سری از اطلاعات رو جا انداختی ...
        </p>
        <p className='text-stone-600 mb-4'>
          لطفا مطمئن شو که همه اطلاعات خواسته شده رو پر کرده باشی
        </p>
      </Modal>
      <div className='mt-16 col-span-3 w-[35rem] flex flex-col mx-auto'>
        <menu className='w-full flex justify-end gap-4 my-4'>
          <li>
            <Button onClick={handleSave}>ذخیره</Button>
          </li>
          <li>
            <Button
              onClick={() => handleClick(undefined)}
              className='w-[70px] bg-stone-50 hover:bg-stone-200'
            >
              انصراف
            </Button>
          </li>
        </menu>
        <div className='w-full'>
          <Input type='text' ref={title} label='عنوان' />
          <Input ref={description} label='توضیحات' textarea />
          <Input type='date' ref={date} label='تاریخ' />
        </div>
      </div>
    </>
  );
}
