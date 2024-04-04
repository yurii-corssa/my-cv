const generateProjectListMarkup = (projects, selectedProject) => {
  const projectsMarkup = projects
    .map(({ name }) => {
      const isSelected = name === selectedProject;

      return `<option value="${name}" ${
        isSelected ? 'selected' : ''
      } >${name}</option>`;
    })
    .join('');

  const emptyProjectMarkup = `<option></option>`;

  return `${emptyProjectMarkup}${projectsMarkup}`;
};

export default generateProjectListMarkup;
