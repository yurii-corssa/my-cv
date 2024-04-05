import createJobTitle from './createJobTitle';
import { initialJobName } from './initialData';
import updatePageTitle from './updatePageTitle';

createJobTitle(initialJobName);
updatePageTitle();

const jobNameForm = document.querySelector('.js-job-name-form');
const companyNameForm = document.querySelector('.js-company-name-form');

const handleSubmit = e => {
  e.preventDefault();

  const jobName = e.currentTarget.elements.jobName.value;

  createJobTitle(jobName);
  updatePageTitle();
};

jobNameForm.addEventListener('submit', handleSubmit);
companyNameForm.addEventListener('submit', e => e.preventDefault());
