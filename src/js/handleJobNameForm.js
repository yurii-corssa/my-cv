import createJobTitle from './createJobTitle';
import { initialJobName } from './initialData';

createJobTitle(initialJobName);

const jobNameForm = document.querySelector('.job-name-form');

const handleSubmit = e => {
  e.preventDefault();

  const jobName = e.currentTarget.elements.jobName.value;

  createJobTitle(jobName);
};

jobNameForm.addEventListener('submit', handleSubmit);
