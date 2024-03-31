import { jobTitle } from '../initialData';
import insertMarkup from './helpers/insertMarkup';
import { getSummary } from './services/api';

const jobTitleEl = document.querySelector('.js-job-title');

const createSummary = async position => {
  const summaryParagraph = document.querySelector('.js-summary');
  const summary = await getSummary(position);

  insertMarkup(summary, summaryParagraph);
};

insertMarkup(jobTitle, jobTitleEl);
createSummary('frontend');
