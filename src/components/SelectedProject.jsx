import Button from './Button';

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
        return projectsState.selectedProject != item.id;
      });
      return { selectedProject: undefined, projects: newProjects };
    });
  };

  return (
    <div className='flex justify-center items-center col-span-3'>
      <header className='w-[30rem] flex flex-col gap-10 justify-center items-center mx-auto border-2 rounded-md p-8'>
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-2xl'>{selected.title}</h1>
          <Button onClick={deleteHandler}>حذف</Button>
        </div>
        <p>{selected.description}</p>
        <p>{formattedDate}</p>
      </header>
    </div>
  );
}
