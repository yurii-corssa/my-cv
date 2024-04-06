import createProject from './createProject';
import { initialProjects } from './initialData';
import generateProjectListMarkup from './markup/generateProjectListMarkup';
import { getAllProjects } from './services/api';

const handleChange = e => {
  const project = e.currentTarget;
  const value = project.value;
  const position = project.classList[project.classList.length - 1];

  createProject(value, position);
};

(async () => {
  const projectSelectEl = document.querySelectorAll('.js-project-select');

  const projects = await getAllProjects();

  projectSelectEl.forEach((el, i) => {
    const projectListMarkup = generateProjectListMarkup(
      projects,
      initialProjects[i]
    );

    el.innerHTML = projectListMarkup;

    const value = el.value;
    const position = el.classList[el.classList.length - 1];

    createProject(value, position);

    el.addEventListener('change', handleChange);
  });
})();
