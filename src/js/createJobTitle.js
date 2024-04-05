const createJobTitle = jobTitle => {
  const jobTitleEl = document.querySelector('.js-job-title');
  jobTitleEl.innerHTML = jobTitle;
};

export default createJobTitle;
