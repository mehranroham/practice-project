import Button from './Button';

export default function SideBar({
  projectsState,
  handleProjectClick,
  handleClick,
  ...props
}) {
  return (
    <aside {...props}>
      <h2
        onClick={() => handleClick(undefined)}
        className='font-IRANSansBold text-2xl mb-8 cursor-pointer'
      >
        پروژه های من
      </h2>
      <div className='flex justify-center'>
        <Button onClick={() => handleClick(null)}>+ اضافه کردن</Button>
      </div>
      <ul className='flex flex-col px-10 mt-12 gap-5 text-lg'>
        {projectsState.projects.map((project, index) => {
          let cssClasses = 'w-full  hover:bg-stone-700 hover:text-stone-400';
          if (projectsState.selectedProject === project.id) {
            cssClasses += ' bg-stone-700 text-stone-400';
          } else {
            cssClasses += ' text-stone-600';
          }
          return (
            <Button
              onClick={() => handleProjectClick(project.id)}
              className={cssClasses}
              key={project.id}
            >
              <li className='flex justify-start '>
                {index + 1}: {project.title}
              </li>
            </Button>
          );
        })}
      </ul>
    </aside>
  );
}
