import generateProjectMarkup from './markup/generateProjectMarkup';
import { getProject } from './services/api';

const createProject = async (projectName, position) => {
  const projectItem = document.querySelector(`.js-project-item.${position}`);

  if (projectName === '') {
    projectItem.innerHTML = '';
    return;
  }

  const project = await getProject(projectName);

  const projectMarkup = generateProjectMarkup(project);
  projectItem.innerHTML = projectMarkup;
};

export default createProject;
