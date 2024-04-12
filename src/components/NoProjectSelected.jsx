import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ handleClick }) {
  return (
    <div className=' text-center col-span-3 w-full flex flex-col items-center justify-center'>
      <img
        src={noProjectImage}
        alt='An empty task list'
        className='w-20 h-20 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        هیچ پروژه ای انتخاب نشده است
      </h2>
      <p className='text-stone-400 mb-4'>
        یک مورد را انتخاب کنید یا یک پروژه جدید بسازید
      </p>
      <p className='mt-8'>
        <Button onClick={() => handleClick(null)}>ساختن پروژه جدید</Button>
      </p>
    </div>
  );
}
