import Button from './Button';
import Tasks from './Tasks';

export default function SelectedProject({ projectsState, setProjectsState }) {
  const selected = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProject;
  });

  const formattedDate = new Date(selected.date).toLocaleString('fa-IR', {
    year: '2-digit',
    month: 'short',
    day: 'numeric',
  });

  const deleteHandler = () => {
    setProjectsState((prev) => {
      const newProjects = prev.projects.filter((item) => {
        return prev.selectedProject != item.id;
      });
      return { selectedProject: undefined, projects: newProjects };
    });
  };

  return (
    <div className='flex flex-col pt-20 items-center col-span-3'>
      <header className='w-[30rem] flex flex-col gap-5 justify-center items-center mx-auto border-b-2 p-8'>
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-2xl'>{selected.title}</h1>
          <Button
            className='w-14 bg-stone-600 text-stone-200 hover:bg-stone-700 hover:text-stone-400'
            onClick={deleteHandler}
          >
            حذف
          </Button>
        </div>
        <p className='flex w-full text-sm text-stone-600'>{formattedDate}</p>
        <p className='pt-7 whitespace-pre-wrap w-full px-10'>
          {selected.description}
        </p>
      </header>
      <Tasks
        projectsState={projectsState}
        setProjectsState={setProjectsState}
      />
    </div>
  );
}
