import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SideBar from './components/SideBar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  const handleClick = (value) => {
    setProjectsState((prev) => {
      return { ...prev, selectedProject: value };
    });
  };

  const handleAddProject = (data) => {
    const newProject = {
      ...data,
      id: Math.random(),
    };

    setProjectsState((prev) => {
      return { ...prev, projects: [...projectsState.projects, newProject] };
    });
  };

  const handleProjectClick = (id) => {
    setProjectsState((prev) => {
      return { ...prev, selectedProject: id };
    });
  };

  let content;

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleClick={handleClick}
      />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected handleClick={handleClick} />;
  } else {
    content = (
      <SelectedProject
        projectsState={projectsState}
        setProjectsState={setProjectsState}
      />
    );
  }

  return (
    <main className='w-full h-screen pt-8 grid grid-cols-4 font-IRANSans bg-stone-50'>
      <SideBar
        handleProjectClick={handleProjectClick}
        projectsState={projectsState}
        handleClick={handleClick}
        className='col-span-1 py-12 bg-stone-900 text-stone-50 rounded-tl-xl text-center'
      />
      {content}
    </main>
  );
}

export default App;
