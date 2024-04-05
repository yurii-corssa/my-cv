import toTitleCase from './helpers/toTitleCase';

const updatePageTitle = () => {
  const mainTitle = document.querySelector('.js-main-title').innerText;
  const jobTitle = document.querySelector('.js-job-title').innerText;
  const companyName = document.querySelector('.js-company-name-input').value;

  const pageTitle = `${mainTitle} - ${jobTitle} ${
    companyName ? `(${companyName})` : ''
  }`;

  document.title = toTitleCase(pageTitle);
};

export default updatePageTitle;
