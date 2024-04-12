import Button from './Button';
import { useState } from 'react';

export default function Tasks({ projectsState, setProjectsState }) {
  const [text, setText] = useState('');

  const addTaskHandler = () => {
    setProjectsState((prev) => {
      const updatedProject = prev.projects.find((item) => {
        return item.id === prev.selectedProject;
      });

      const otherProjects = prev.projects.filter((item) => {
        return item.id !== prev.selectedProject;
      });

      !updatedProject.tasks
        ? (updatedProject.tasks = [text])
        : updatedProject.tasks.push(text);

      let uniqueArray = updatedProject.tasks.filter((item, index, self) => {
        return self.indexOf(item) == index;
      });

      updatedProject.tasks = uniqueArray;

      return {
        selectedProject: prev.selectedProject,
        projects: [...otherProjects, updatedProject],
      };
    });
    setText('');
  };

  const selected = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProject;
  });

  return (
    <section className='mt-4 w-[30rem] flex flex-col gap-5'>
      <h2 className='text-stone-700'>یادداشت ها:</h2>
      <div className='w-full relative rounded-md overflow-hidden'>
        <input
          type='text'
          value={text}
          onChange={(event) => setText(event.target.value)}
          className='px-2 py-1 placeholder:text-sm border-2 rounded-md w-full outline-none'
          placeholder='اضافه کردن'
        />
        <Button
          onClick={addTaskHandler}
          className='absolute rounded-none left-0 top-0 w-8 pt-[12px] bg-stone-700 bottom-0 text-stone-50'
        >
          +
        </Button>
      </div>
      {!selected.tasks && <p className='text-sm'>هنوز یادداشتی وارد نکردید</p>}
      <ul className='grid grid-cols-2 gap-3'>
        {selected.tasks &&
          selected.tasks.map((item, index) => {
            return (
              <li key={index}>
                {index + 1}: {item}
              </li>
            );
          })}
      </ul>
    </section>
  );
}
